import React from 'react';

import Logo from '@/public/images/favicond.png'
import Image from 'next/image';


const Foter = () => {
    return (
        <footer className='w-full border-t-2 py-1 border-yellow-700/60'>
            <span className='w-full flex justify-center items-center'>
                <Image src={Logo} className='invert' height={20} width={20} alt='logo' />
            </span>
        </footer>
    )
}

export default Foter