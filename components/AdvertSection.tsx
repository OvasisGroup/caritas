import React from 'react'
import { DataTableDemo } from './Table'

export default function AdvertSection() {
  return (
    <div className='grid md:grid-cols-2 gap-4 mt-6'>
        <div className="bg-white p-6 rounded-md">
            <h2 className='text-primary font-bold text-xl'>Recent transactions</h2>
            <DataTableDemo/></div>
        <div className='bg-[url(/images/jpg/caritas-banner.jpg)] bg-cover bg-center h-[300px] rounded-lg'></div>
    </div>
  )
}
