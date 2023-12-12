import React from 'react';
import axios from 'axios';
import qs from 'query-string';
import { Product } from '@/types';



const URL = `${process.env.NEXT_PUBLIC_API}/products`;

interface Query { 
    name?: string
    description?: string
    price?: number
    imageId?:string
    isFeatured?:boolean
    category?:string

}

const getAllProducts = async (query: Query): Promise<Product[]> => {

    const url = qs.stringifyUrl({
        url: URL , 
        query: { 
            name: query.name,
            price: query.price,
            imageId: query.imageId,
            isFeatured: query.isFeatured,
            category: query.category
        }
    })

    const res = await axios.get(url)
    if( res.data && res.data.allproducts)
    {
        return res.data.allproducts
    }

  return []
}

export default getAllProducts