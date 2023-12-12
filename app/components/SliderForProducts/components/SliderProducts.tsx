'use client'

import { Billboard, Product } from '@/types';
import React, { useRef, useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaFireFlameCurved } from "react-icons/fa6";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ProductListProps {

    products: Product[]


}

const SliderProducts: React.FC<ProductListProps> = ({ products }) => {
    const router = useRouter()
    const [width, setWidth] = useState(0)
    const carousel = useRef(null)

    useEffect(() => {
        if (carousel.current) {
            const currentCarousel = carousel.current as HTMLDivElement;
            setWidth(currentCarousel.scrollWidth - currentCarousel.offsetWidth);
        }
    }, []);

    return (
        <div className='mt-20'>

            <motion.div ref={carousel} className='carousel'>
                <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className='inner-carousel space-x-3'>
                    {products.filter((feautred) => feautred.isFeatured).map((item) => (

                        <motion.div
                            onDoubleClick={() => router.push(`/products/${item.id}`)}
                            key={item.id}
                            className='item   relative'
                            style={{
                                backgroundImage: `url(${item.imageId})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover'
                            }}

                        >
                            <span className='w-full  text-neutral-300 absolute bottom-0 font-mono bg-gradient-to-t from-20% from-neutral-800/90  px-2 flex-row flex justify-between'>

                                <h1 >{item.name.toLocaleUpperCase().slice(0, 25)}</h1>
                                <p>{item.price.toFixed(2)}$</p>

                            </span>

                        </motion.div>

                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default SliderProducts