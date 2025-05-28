import React from 'react'
import { SelectAccount } from './selectAccount'

export default function DashboardCards() {
    return (
        <div className="grid grid-cols-4 gap-4 mt-6">
            
            <div className="col-span-1 bg-red-200">
            <SelectAccount/>1 part</div>
            <div className="col-span-3 bg-blue-200">3 parts</div>
        </div>
    )
}
