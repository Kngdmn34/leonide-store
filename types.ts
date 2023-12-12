export interface Billboard  { 
name: string
description: string
coverId: string
price: number
discount: number

}

export interface Product {
    id:string 
    name: string
    description: string
    price: number
    imageId:string
    isFeatured:boolean
    category:string
}