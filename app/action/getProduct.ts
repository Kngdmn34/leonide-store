import React from 'react';
import axios from 'axios';
import { Product } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API}/products`;


const getProduct = async (id: string): Promise<Product> => {

    try { 
        const res = await axios.get(`${URL}/${id}`)
        res.data && res.data.product
            return res.data.product
        
        
    }

catch(error) {
    throw error
}
  
}

export default getProduct