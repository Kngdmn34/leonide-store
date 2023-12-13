
import { Metadata, ResolvingMetadata } from 'next'
import getProduct from '@/app/action/getProduct'
import Navbar from '@/app/components/Navbar'
import React, { MouseEventHandler } from 'react';
import Image from 'next/image';
import Foter from '@/app/components/Foter';
import { Pinyon_Script } from 'next/font/google';
import useCart from '@/app/hooks/use-cart';
import Button from '@/app/UIcomponents/Button';
import axios, { AxiosResponse } from 'axios';
import { Product } from '@/types';

const pinyon = Pinyon_Script({ subsets: ['latin'], weight: ["400"] })

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const id = params.id

    // fetch data
    const product: AxiosResponse<{ product: Product }> = await axios.get(`${process.env.NEXT_PUBLIC_API}/products/${id}`)




    return {
        title: product.data.product.name.toUpperCase(),

    }
}

const ProductPage = async ({ params }: { params: { id: string } }) => {

    const data = await getProduct(params.id)

    return (
        <>
            <Navbar />
            <main className='mt-11'>
                <div className='w-[80%] min-h-screen mx-auto flex flex-row space-x-10 items-center justify-center '>
                    <span className='shadow-xl  w-72  h-72  aspect-square border-4 border-yellow-700/60'
                        style={{
                            backgroundImage: `url(${data.imageId})`,
                            backgroundPosition: 'center',
                            objectFit: 'contain',
                            backgroundSize: 'cover'
                        }}
                    >

                    </span>
                    <span className='flex flex-col space-y-3 justify-start items-start'>
                        <label className='text-3xl mb-6 shadow-lg p-2 border-b-2  border-yellow-700/60 tracking-wider  '>{data.name.toUpperCase()}</label>
                        <p className={`${pinyon.className}  flex flex-row space-x-5 drop-shadow-sm text-3xl p-1 font-bold  tracking-wide `}><p className='first-letter:uppercase'>for</p> <p className='first-letter:uppercase'>{data.category}</p></p>
                        <p className=' indent-4  first-letter:uppercase cursor-default' >{data.description}</p>

                        <span className='w-full  flex justify-end items-end flex-row space-x-5'>
                            <p className='p-2'>{data.price.toFixed(2)} MAD </p>
                            <Button data={data} />

                        </span>
                    </span>
                </div>

            </main >
            <Foter />
        </>
    )
}

export default ProductPage