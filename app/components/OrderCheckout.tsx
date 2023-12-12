'use client'

import React, { useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import useCart from '../hooks/use-cart';
import toast from 'react-hot-toast';
import { stat } from 'fs';
import { cn } from '@/utils/utils'
import Currency from '../context/Currency';

const OrderCheckout = () => {

    const searchParams = useSearchParams()
    const items = useCart((state) => state.items);
    const removeAll = useCart((state) => state.removeAll);

    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.price)
    }, 0)

    useEffect(() => {
        if (searchParams.get('success')) {
            toast.success("Payment completed")
            removeAll()
        }
        if (searchParams.get("canceled")) {
            toast.error("Something went wrong")
        }
    }, [searchParams, removeAll])

    const onCheckout = async () => {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/checkout`, {
            productIds: items.map((item) => item.id)
        })
        window.location = response.data.url
    }



    return (
        <div className='w-[96%] mx-auto absolute bottom-0 rounded-md h-52 bg-white/80'>
            <span className='p-2'>
                <h1 className=' pt-3 border-t-2 text-2xl text-neutral-800 tracking-wide border-yellow-700/60 px-4 font-semilight'> Order </h1>
                <div className='flex  text-neutral-800  w-[80%] mx-auto justify-between items-center border-t border-neutral-600 pt-4'>
                    <span className='text-base font-medium text-neutral-800'>
                        Order Total
                    </span>
                    <Currency value={totalPrice} />
                </div>
            </span>
            <button disabled={items.length === 0} onClick={onCheckout} className={cn('mt-6 border w-[96%]  hover:shadow-lg hover:shadow-yellow-700/50 tracking-wider disabled:shadow-none disabled:scale-100 disabled:bg-neutral-600 disabled:cursor-not-allowed hover:scale-105  transition-all  rounded-md  p-2 ')}>
                checkout
            </button>
        </div>
    )
}

export default OrderCheckout