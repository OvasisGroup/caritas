'use client'
import { useState } from "react";
import Image from "next/image";
import { BiHide } from "react-icons/bi";

export default function CardMain() {
    const [show, setShow]=useState(false)

    return (
        <div className='bg-primary text-white rounded-lg p-6 flex flex-col justify-between h-64 bg-[url(/images/4x/catbg@4x.png)] bg-cover bg-center mt-4'>
            <div className='flex items-center justify-between mb-4'>
               
                <Image
                    width={50}
                    height={40}
                    className='viclogo_image'
                    src="/4x/caritas-white.png"
                    alt="vicwhite"
                />
                 <Image
                    width={40}
                    height={40}
                    className='chiplogo_image'
                    src="/images/SVG/chip.svg"
                    alt="vicwhite"
                />
            </div>
            <div className='flex items-center justify-between'>
                <div className='mainbalance'>
                    <p>Balance    <span><BiHide className='showhide' onClick={()=>setShow(!show)}/></span></p>
                    { show? <h4>$ 10,000.00</h4> : <h4>*************</h4>}
                    
                </div>
                <p className='text-xl font-bold'>USD</p>
            </div>
        </div>
    )
}