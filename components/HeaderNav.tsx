import React from 'react'
import { SidebarTrigger } from './ui/sidebar'
import { ThemeToggle } from './theme-toggle'
import LanguageSwitcher from './LanguageSwitcher'

export default function HeaderNav() {
    return (
        <div>
            <div className="flex flex-row items center gap-2">
                <SidebarTrigger />
                <ThemeToggle />
                <LanguageSwitcher />
            </div>
        </div>
    )
}
