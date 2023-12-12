'use client'

import React from 'react';


import { IoMdClose } from "react-icons/io";
import useCart from '../hooks/use-cart';
import Image from 'next/image';
import getProduct from '../action/getProduct';
import { Product } from '@/types';

import { TiDelete } from "react-icons/ti";
import OrderCheckout from './OrderCheckout';

interface CartSliderProps {

    Slider: boolean
    SliderToggle: () => void
}

const CartSlider: React.FC<CartSliderProps> = ({ Slider, SliderToggle }) => {

    const cart = useCart()



    return (
        <main className='absolute right-0 top-0 bg-white  shadow-xl z-30 flex justify-end'>
            <aside className={`${Slider ? `w-72 justify-end border-l-2 border-yellow-700/60 min-h-screen` : `hidden`} `} >
                <div className='w-full flex flex-col space-y-3 '>
                    <button onClick={SliderToggle} className='p-2 drop-shadow-md text-yellow-700/60  flex justify-start'>

                        <IoMdClose size='20' />
                    </button>
                    <h1 className='mx-3 cursor-default font-semibold drop-shadow-md'>Shopping Cart</h1>
                    <ul className='w-full flex flex-col items-center space-y-2'>
                        {cart.items.map((item) => (
                            <span key={item.id} className='relative w-[96%] p-1  mx-auto flex flex-row space-x-3 border-b-2 border-yellow-700/60'>
                                <span
                                    className='w-11 h-11'
                                    style={{
                                        backgroundImage: `url(${item.imageId})`,
                                        objectFit: 'contain',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                >

                                </span>
                                <span className='w-full flex flex-col space-y-1 '>
                                    <text className='text-left'>{item.name.slice(0, 15)}</text>
                                    <text className='w-full text-sm flex justify-end'>{item.price.toFixed(2)} MAD </text>
                                </span>
                                <button onClick={() => cart.removeItem(item.id)} className='absolute hover:scale-105 transition-all top-0 right-0'><TiDelete size='20' /></button>
                            </span>
                        ))}

                    </ul>


                    <OrderCheckout />

                </div>
            </aside>
        </main>
    )
}

export default CartSlider