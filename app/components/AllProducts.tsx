

import React from 'react'
import getAllProducts from '../action/getAllProducts';
import Image from 'next/image';
import Link from 'next/link';

const AllProducts = async () => {

    const products = await getAllProducts({ isFeatured: true })

    return (
        <div className='w-[80%]  grid grid-cols-4 gap-y-10 gap-x-3 mb-20  mx-auto mt-16'>
            {products.map((product) =>
                <Link href={`/products/${product.id}`} key={product.id}>
                    <div className='flex hover:scale-105 hover:drop-shadow-lg transition-all flex-col items-center  space-y-1'>

                        <div className='relative w-48 flex outline-2  outline-slate-100 flex-col space-y-1 justify-center items-center h-48 border-2 border-yellow-700/60 p-2'
                            style={{
                                backgroundImage: `url(${product.imageId})`,
                                objectFit: 'contain',
                                backgroundPosition: 'center',
                                backgroundSize: 'cover'

                            }}
                        >

                            <span className='absolute z-10 bottom-0 w-full h-full bg-gradient-to-t from-yellow-700/30 '></span>

                        </div>

                        <hr />
                        <label className='tracking-wide ' >{product.name.toUpperCase().slice(0, 15)}</label>
                        <hr className='w-20 mx-auto border-yellow-700/60' />
                        <label className='font-semibold'>{product.price} MAD</label>
                    </div>
                </Link>
            )}
        </div>
    )
}

export default AllProducts