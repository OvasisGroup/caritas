import { Briefcase, HandCoins, ReceiptText, User2Icon, Wallet } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Quicklinks() {
    return (
        <div className='mt-6 grid md:grid-cols-5 gap-4'>
            <Link href=""><div className='bg-white p-6 rounded-lg flex flex-row items-center justify-between'>
                <User2Icon />
                <p className='font-bold text-primary'>Add Beneficiary</p>
            </div>
            </Link>
            <Link href=""><div className='bg-white p-6 rounded-lg flex flex-row items-center justify-between'>
                <ReceiptText />
                <p className='font-bold text-primary'>Bill Payment</p>
            </div>
            </Link>
            <Link href=""><div className='bg-white p-6 rounded-lg flex flex-row items-center justify-between'>
                <Wallet />
                <p className='font-bold text-primary'>Mpesa Payment</p>
            </div>
            </Link>
            <Link href=""><div className='bg-white p-6 rounded-lg flex flex-row items-center justify-between'>
                <Briefcase />
                <p className='font-bold text-primary'>Trade</p>
            </div>
            </Link>
            <Link href=""><div className='bg-white p-6 rounded-lg flex flex-row items-center justify-between'>
                <HandCoins/>
                <p className='font-bold text-primary'>Instant Payment</p>
            </div>
            </Link>
        </div>
    )
}
