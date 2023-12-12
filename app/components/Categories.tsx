

import React from 'react';
import Image from 'next/image';
//images
import ForMen from '@/public/images/formen.jpg';
import ForWomen from '@/public/images/forwomen.jpg';
import Link from 'next/link';
import getAllProducts from '../action/getAllProducts';


const Categories = () => {


    return (
        <div className='w-[96%] mx-auto mb-16'>
            <div className='grid w-[52%] mx-auto place-content-center gap-5  grid-cols-2 mt-20   '>
                <Link href={
                    {
                        pathname: '/browse',
                        query: {
                            category: "men"
                        }
                    }
                }>
                    <div
                        className='relative  hover:opacity-90  border-4 border-yellow-600/60 p-2  grid items-center  place-content-center justify-center w-72 h-72'
                        style={{
                            backgroundImage: `url('/images/formen.jpg')`,
                            backgroundPosition: 'center',
                            objectFit: 'contain',
                            backgroundSize: 'cover',


                        }}
                    >
                        <h1 className='absolute text-neutral-800 backdrop-blur-sm tracking-widest text-center items-center z-10 text-3xl w-full bg-yellow-700/60'>MEN</h1>
                    </div>
                </Link>
                <Link href={{
                    pathname: '/browse',
                    query: {
                        category: "women"
                    }
                }}>
                    <div className='relative  hover:opacity-90  border-4 border-yellow-600/60 p-2  grid items-center  place-content-center justify-center w-72 h-72'
                        style={{
                            backgroundImage: `url('/images/forwomen.jpg')`,
                            backgroundPosition: 'center',
                            objectFit: 'contain',
                            backgroundSize: 'cover'

                        }}
                    >
                        <h1 className='absolute text-neutral-800 backdrop-blur-sm tracking-widest text-center items-center z-10 text-3xl w-full bg-yellow-700/60'>WOMEN</h1>

                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Categories