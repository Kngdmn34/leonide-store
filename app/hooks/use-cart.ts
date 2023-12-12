import React from 'react';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Product } from '@/types';
import toast from 'react-hot-toast';

interface Cart { 
    items: Product[]
    addItem:(data: Product) => void;
    removeItem:(id: string) => void;
    removeAll: () => void
}

const useCart = create(
    persist<Cart>((set, get) => ( { 
        items: [],
        addItem: (data: Product) => {
            const currentItems = get().items;
            const existingItem = currentItems.find((item) => item.id ===data.id);

            if (existingItem) {
                return toast("Item already in cart")
            }

            set({items: [...get().items, data]});
            toast.success('Product added to the cart', {
iconTheme: { 
    primary: '#FFD700',
    secondary: '#FFD700'
},
            })
        },
        removeItem: (id: string) => { 
            set({items: [...get().items.filter((item) => item.id !== id)]})
            toast.error('Product Removed')
        },
        removeAll: ( ) => set({items: []})
    }), {
        name:'cart-storage',
        storage: createJSONStorage(() => localStorage)
    })
)
 


export default useCart