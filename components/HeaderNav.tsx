import React from 'react'
import { SidebarTrigger } from './ui/sidebar'
import { ThemeToggle } from './theme-toggle'
import LanguageSwitcher from './LanguageSwitcher'
import { Bell } from 'lucide-react'

export default function HeaderNav() {
    return (
        <div className='w-full h-16 bg-white dark:bg-gray-800 flex items-center justify-between px-4'>
            <div className="flex flex-row items-center  justify-between gap-2 w-full">
                <SidebarTrigger />
                <div className='flex items-center gap-2'>
                <Bell/>
                <ThemeToggle />
                <LanguageSwitcher />
                </div>
            </div>
        </div>
    )
}
