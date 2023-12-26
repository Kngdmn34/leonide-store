'use client';
import React, { useState } from 'react';

import { Pinyon_Script } from 'next/font/google';
import Logo from '@/public/images/pngwing.comli.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MdOutlineShoppingBag } from "react-icons/md";
import CartSlider from './CartSlider';
import useCart from '../hooks/use-cart';
import Search from './Search';

const pinyon = Pinyon_Script({ subsets: ['latin'], weight: ["400"] })

const Navbar = () => {
    const [Slider, setSlider] = useState(false)
    const router = useRouter()

    const cart = useCart()

    const SliderToggle = () => {
        setSlider(!Slider)
    }

    return (
        <nav className={` fixed   backdrop-blur-md z-20  w-full top-0  shadow-xl  border-b-4  border-yellow-600/60 py-1`}>
            <div className='w-full relative '>
                <span className=' w-full justify-center flex-col space-y-1 items-center'>
                    <div onClick={() => router.push(`/`)} className={`${pinyon.className} cursor-default flex relative  text-3xl text-yellow-700/80 tracking-wide font-bold drop-shadow-md z-20 justify-center`}>Leonide</div>
                    <p className='text-tiny absolute tracking-wider   xs -bottom-0 text-center w-full'>PARFUMS</p>

                </span>
                <span className='absolute right-1 top-0.5 z-20 w-1/2'>
                    <Search />
                </span>
                <span className='absolute top-1 right-3 '>
                    <button onClick={SliderToggle} className='relative z-20 items-center'>

                        <MdOutlineShoppingBag size='20' className='text-yellow-700/60' />
                        <span className='absolute left-0 top-0  rounded-full  text-xs z-10'>{cart.items.length > 0 && <p className='absolute -left-1 top-0 bg-yellow-600 text-white flex justify-center items-center rounded-full w-3 h-3'>{cart.items.length}</p>}</span>

                    </button>

                </span>
                {Slider &&
                    <div >
                        <CartSlider Slider={Slider} SliderToggle={SliderToggle} />
                    </div>
                }
            </div>

        </nav>
    )
}

export default Navbar