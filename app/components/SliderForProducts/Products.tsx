
import React from 'react'


import SliderProducts from './components/SliderProducts';
import getAllProducts from '@/app/action/getAllProducts';

const ProductsSlider = async () => {

    const billboard = await getAllProducts({ isFeatured: true })

    console.log(billboard)
    if (!billboard) {
        console.log('no products')
    }

    return (
        <div className='w-full mb-20 mt-11'>

            <br />
            <div className='w-[96%] mx-auto '>
                <SliderProducts products={billboard} />
            </div>

        </div>
    )
}

export default ProductsSlider