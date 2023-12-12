'use client'

import React, { MouseEventHandler } from 'react'
import useCart from '../hooks/use-cart'
import { Product } from '@/types'

interface ButtonProps {
    data: Product

}

const Button: React.FC<ButtonProps> = ({ data }) => {

    const cart = useCart()

    const addToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        cart.addItem(data)

    }

    return (
        <button onClick={addToCart} className='border-4  border-yellow-700/60 p-2 hover:bg-gradient-to-r  duration-1000 from-yellow-500/40 transition-all '>Add to cart</button>
    )
}

export default Button