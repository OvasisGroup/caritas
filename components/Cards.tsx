import React from 'react'
import { SelectAccount } from './selectAccount'
import CardMain from './ui/Card'
import Image from 'next/image'

export default function DashboardCards() {
    return (
        <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="">
                <SelectAccount />
                <CardMain />
            </div>
            <div className="md:mt-13">
                <div className="bg-white rounded-2xl flex flex-row items-center justify-between p-6 min-h-[250px]">
                    <div>
                        <h2 className="text-xl font-normal text-gray-700 mb-2">Total Income</h2>
                        <p className="text-3xl font-bold text-red-500">$2,450</p>
                    </div>
                    <Image src="/images/svg/carisat-icon.svg" alt="Caritas Logo" width={100} height={100} className='mb-4 flex items-center justify-center' />
                </div>
            </div>
            <div className="md:mt-13">
                <div className="bg-white rounded-2xl flex flex-row items-center justify-between p-6 min-h-[250px]">
                    <div>
                        <h2 className="text-xl font-normal text-gray-700 mb-2">Total Spending</h2>
                        <p className="text-3xl font-bold text-red-500">$1,450</p>
                    </div>
                    <Image src="/images/svg/carisat-icon.svg" alt="Caritas Logo" width={100} height={100} className='mb-4 flex items-center justify-center' />
                </div>
            </div>
        </div>
    )
}
