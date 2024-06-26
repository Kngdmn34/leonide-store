'use client'

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion'
import { Billboard as BillboardType } from '@/types';
import Logo from '@/public/images/pngwinggold.com.png'
import Image from 'next/image';

interface BillboardPage {
    data: BillboardType[]
}



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
        <div className='relative w-[96%] h-[96%] mx-auto mt-20 border-4 border-yellow-700/60   mb-11 overflow-hidden'>

            {data.length !== 0 ?
                <div ref={ref} style={{ overflow: 'hidden' }}>
                    <AnimatePresence mode='wait' key={currentImage}>
                        <motion.div className='absolute  bg-gradient-to-r  min-h-screen  from-yellow-800/60   left-0 w-full z-10'>

                            <motion.h1
                                className='text-2xl md:text-4xl mt-20 md:mt-32 tracking-wider font-bold mx-11 md:mx-24  drop-shadow-md text-neutral-300'
                                key={currentImage}
                                initial={{ opacity: 1, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                            >

                                {textContent.name.toUpperCase().slice(0, 25)}

                            </motion.h1>
                            <motion.h1 transition={{ duration: 0.5 }} animate={{ x: 250 }} className='lg:flex hidden absolute text-neutral-300 z-0 line-through rounded-xl shadow-md font-bold bg-neutral-900/80 p-2 text-sm '>
                                {priceContext.price.toFixed(1)} MAD
                            </motion.h1>
                            <motion.h2 transition={{ duration: 1 }} animate={{ x: 300 }} className='lg:flex hidden absolute p-1 text-neutral-300 rounded-xl bg-yellow-700/50 font-light ml-11  mt-1 z-10 shadow-xl text-lg'>
                                - {(((priceContext.price - priceContext.discount) / priceContext.price) * 100).toFixed(0)} %

                            </motion.h2>
                            <motion.h1 transition={{ duration: 0.5 }} animate={{ x: 300 }} className='lg:flex hidden absolute text-neutral-300 mt-6 rounded-xl drop-shadow-md font-bold  p-2 text-4xl '>
                                {priceContext.discount} MAD
                            </motion.h1>

                            <motion.h2
                                className='lg:flex hidden w-1/2 indent-3 text-neutral-200 mt-20 mx-11'
                                key={currentImage}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.5 }}
                            >{textContent.description.slice(0, 120).toLocaleLowerCase()}...</motion.h2>
                            <motion.h1 transition={{ duration: 0.5 }} animate={{ x: 250 }} className='lg:flex hidden absolute text-neutral-300 z-0 line-through rounded-xl shadow-md font-bold bg-neutral-900/80 p-2 text-sm '>
                                {priceContext.price.toFixed(1)} MAD
                            </motion.h1>

                            {/*Mobile version */}

                            <motion.h1 transition={{ duration: 0.5 }} animate={{ x: 20 }} className='lg:hidden mt-11 flex absolute text-neutral-300 z-0 line-through rounded-xl shadow-md font-bold bg-neutral-900/80 p-2 text-sm '>
                                {priceContext.price.toFixed(1)} MAD
                            </motion.h1>

                            <motion.h2 transition={{ duration: 1 }} animate={{ x: 50 }} className='lg:hidden flex mt-20 absolute p-1 text-neutral-300 rounded-xl bg-yellow-700/50 font-light ml-11   z-10 shadow-xl text-lg'>
                                {(((priceContext.price - priceContext.discount) / priceContext.price) * 100).toFixed(0)} % OFF

                            </motion.h2>
                            <motion.h1 transition={{ duration: 0.5 }} animate={{ x: 30 }} className='lg:hidden flex mt-36 absolute text-neutral-300  rounded-xl drop-shadow-md font-bold  p-2 text-4xl '>
                                {priceContext.discount} MAD
                            </motion.h1>




                        </motion.div>
                        <motion.div
                            className='relative  w-full h-96  overflow-hidden opacity-95 inset-0  z-0 '
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
                            <Image className='   absolute drop-shadow-md right-3 top-5  ' width={100} src={Logo} quality={100} alt='logo' />
                        </motion.div>

                    </AnimatePresence>


                </div>
                : ''}






        </div>
    )
}

export default BilboardSec