import Image from 'next/image'
import React from 'react'

export default function Logoarea() {
  return (
    <div className='pl-4 pt-4 mb-4'>
        <Image src="/images/jpg/caritas_logo.png" alt="Logo" width={150} height={100} />
    </div>
  )
}
