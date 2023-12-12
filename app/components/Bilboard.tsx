'use client'

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion'
import { Billboard as BillboardType } from '@/types';
import Logo from '@/public/images/pngwing.comli.png'
import Image from 'next/image';

interface BillboardPage {
    data: BillboardType[]
}

export const revalidate = 10

const BilboardSec: React.FC<BillboardPage> = ({ data }) => {


    const imageCount = data.length;
    const autoSlide = 10000;

    const ref = useRef(null)

    const [currentImage, setCurrentImage] = useState(0);
    const [textContent, setTextContent] = useState(data[0])
    const [priceContext, setPriceContext] = useState(data[0]);

    const nextImage = () => {
        setCurrentImage((prevImaage) => (prevImaage + 1) % imageCount)
    }

    const imageSpring = useSpring(0);

    useEffect(() => {
        imageSpring.set(currentImage);

    }, [currentImage])

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage()
        }, autoSlide)
        return () => { clearInterval(interval) }
    }, [currentImage])

    useEffect(() => {
        setTextContent(data[currentImage]);
        setPriceContext(data[currentImage])
    }, [currentImage])



    return (
        <div className='relative w-[80%] min-h-screen  mb-11 mt-20 mx-auto  shadow-2xl border-4 border-yellow-700/60  overflow-hidden'>
            {data.length !== 0 ?
                <div ref={ref} style={{ overflow: 'hidden' }}>
                    <AnimatePresence mode='wait' key={currentImage}>
                        <motion.div className='absolute  bg-gradient-to-r  min-h-screen  from-yellow-800   left-0 w-full z-10'>

                            <motion.h1
                                className='text-4xl mt-52 tracking-wider font-bold mx-24  drop-shadow-md text-neutral-300'
                                key={currentImage}
                                initial={{ opacity: 1, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                            >

                                {textContent.name.toUpperCase().slice(0, 25)}

                            </motion.h1>
                            <motion.h1 transition={{ duration: 0.5 }} animate={{ x: 250 }} className='absolute text-neutral-300 z-0 line-through rounded-xl shadow-md font-bold bg-neutral-900/80 p-2 text-sm '>
                                {priceContext.price.toFixed(1)} MAD
                            </motion.h1>
                            <motion.h2 transition={{ duration: 1 }} animate={{ x: 300 }} className='absolute p-1 text-neutral-300 rounded-xl bg-yellow-700/50 font-light ml-11  mt-1 z-10 shadow-xl text-lg'>
                                - {(((priceContext.price - priceContext.discount) / priceContext.price) * 100).toFixed(0)} %

                            </motion.h2>
                            <motion.h1 transition={{ duration: 0.5 }} animate={{ x: 300 }} className='absolute text-neutral-300 mt-6 rounded-xl drop-shadow-md font-bold  p-2 text-4xl '>
                                {priceContext.discount} MAD
                            </motion.h1>

                            <motion.h2
                                className='w-1/2 indent-3 text-neutral-200 mt-20 mx-11'
                                key={currentImage}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.5 }}
                            >{textContent.description.slice(0, 120).toLocaleLowerCase()}...</motion.h2>

                        </motion.div>
                        <motion.div
                            className='relative  w-full min-h-screen overflow-hidden  opacity-95   z-0 '
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            style={{

                                backgroundImage: `url(${data[currentImage]?.coverId})`,
                                backgroundPosition: 'center',
                                objectFit: 'contain',
                                backgroundSize: 'cover'
                            }}
                        >
                            <Image className='   absolute drop-shadow-md right-5 top-14  ' width={150} src={Logo} quality={100} alt='logo' />
                        </motion.div>

                    </AnimatePresence>
                </div>

                : ''}
        </div>
    )
}

export default BilboardSec