'use client'
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useSearchParams } from 'next/navigation';
import getAllProducts from '../action/getAllProducts';
import { Product } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

const BrowsePage = ({ searchParams }: { searchParams: { category: string } }) => {


    const [products, setProducts] = useState<Product[]>([]);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const fetchedProducts = await getAllProducts({ category: searchParams.category });
                setProducts(fetchedProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [searchParams.category]);

    return (
        <>
            <Navbar />

            <main className='w-full mt-20'>
                <div className='w-full'>
                    <h1 className='mx-11 text-2xl tracking-wide flex  mb-16'>Browse for <h1 className='ml-2 first-letter:uppercase'>{searchParams.category}</h1> </h1>
                    <div className='mx-16 mt-16 grid gap-4 grid-cols-4'>
                        {products.
                            filter((product) => product.category === searchParams.category)
                            .map((item) => (
                                <Link href={`/products/${item.id}`} key={item.id}>
                                    <div className='flex hover:scale-105 hover:drop-shadow-lg transition-all flex-col items-center  space-y-1'>

                                        <div className='relative w-48 flex outline-2  outline-slate-100 flex-col space-y-1 justify-center items-center h-48 border-2 border-yellow-700/60 p-2'
                                            style={{
                                                backgroundImage: `url(${item.imageId})`,
                                                objectFit: 'contain',
                                                backgroundPosition: 'center',
                                                backgroundSize: 'cover'

                                            }}
                                        >

                                            <span className='absolute z-10 bottom-0 w-full h-full bg-gradient-to-t from-yellow-700/30 '></span>

                                        </div>

                                        <hr />
                                        <label className='tracking-wide ' >{item.name.toUpperCase().slice(0, 15)}</label>
                                        <hr className='w-20 mx-auto border-yellow-700/60' />
                                        <label className='font-semibold'>{item.price} MAD</label>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </main>
        </>
    );
};

export default BrowsePage;
