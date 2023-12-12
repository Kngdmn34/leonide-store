'use client'
import { Product } from '@/types';
import axios from 'axios';
import Link from 'next/link';
import React, { useState, useEffect, HTMLInputTypeAttribute } from 'react';
import getAllProducts from '../action/getAllProducts';
import debounce from 'lodash.debounce';
import { IoSearch } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";

const Search = () => {

    const [query, setQuery] = useState<string>('')
    const [products, setProducts] = useState<Product[]>([])
    const [open, setIsOpen] = useState(false)


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.defaultPrevented
        setQuery(event.target.value)

    }

    const InputToggle = () => {
        setIsOpen((prevOpen) => !prevOpen);
        if (!open) {
            setQuery('');
        }
    };

    useEffect(() => {
        const fetchProducts = async () => {
            if (query.trim() === '') {
                setProducts([])
                return;
            }
            try {
                const fetchedProducts = await getAllProducts({ isFeatured: true });
                setProducts(fetchedProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [query]);



    return (
        <div className='w-full '>
            <div className='w-full  flex justify-center items-center flex-col space-y-3'>
                <span className='relative'>
                    <input
                        className={`text-sm relative ${open ? `flex z-20 translate-x-0  ease-in-out delay-300 duration-400` : ` opacity-0 translate-x-5`} px-1 -right-36 top-1  bg-white/20 backdrop-blur-3xl border-2 border-yellow-700/60 `}
                        placeholder='Search ...'
                        value={query}
                        onChange={handleChange}
                    />
                    <button className='absolute z-30 top-1.5 -right-36'>
                        {open ? <TiDeleteOutline className='text-yellow-700/60' onClick={InputToggle} /> : <IoSearch className='text-yellow-700/60' onClick={InputToggle} />}
                    </button>
                </span>
                <span className='flex flex-col'>
                    {query.trim() !== '' &&
                        products.
                            filter((product) => query === '' || product.name.includes(query))
                            .map((item) => (
                                <Link href={`/products/${item.id}`} key={item.id} className='w-full'>
                                    <div className='flex ml-60 border-4 border-b-2 border-yellow-700/60 p-1 bg-white px-5 hover:scale-105 hover:drop-shadow-lg transition-all flex-row items-center  space-x-1'>

                                        <div className='relative w-16 h-16 flex outline-2  outline-slate-100 flex-col space-y-1 justify-center items-center  border-2 border-yellow-700/60 p-2'
                                            style={{
                                                backgroundImage: `url(${item.imageId})`,
                                                objectFit: 'contain',
                                                backgroundPosition: 'center',
                                                backgroundSize: 'cover'

                                            }}
                                        >

                                            <span className='absolute z-10 bottom-0 w-full h-full bg-gradient-to-t from-yellow-700/30 '></span>

                                        </div>


                                        <label className='tracking-wide ' >{item.name.toUpperCase().slice(0, 15)}</label>


                                    </div>
                                </Link>
                            ))}
                </span>

            </div>

        </div>
    )
}

export default Search