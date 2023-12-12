import React from 'react';

//icons 
import { RiCustomerService2Line } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const Services = () => {
    return (
        <div className='w-[72%] mx-auto mb-11 shadow-lg'>
            <div className='flex p-2 justify-center items-center border-2 border-yellow-700/60'>
                <span className='flex  text-neutral-700 drop-shadow-md flex-row space-x-20'>
                    <span className='flex flex-col space-y-2 items-center'>
                        <RiCustomerService2Line size='30' />
                        <label className='text-sm'>Customer Support 7j/24h</label>
                    </span>
                    <span className='flex  flex-col space-y-2 items-center'>
                        <TbTruckDelivery size='30' />
                        <label className='text-sm'>Delivery within 3 days</label>
                    </span>
                    <span className='flex flex-col space-y-2 items-center'>
                        <VscWorkspaceTrusted size='30' />
                        <label className='text-sm'>Trusted by our clients</label>
                    </span>


                </span>

            </div>

        </div>
    )
}

export default Services