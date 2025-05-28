"use client"

import * as React from "react"
import {
  BookOpen,
  ExternalLink,
  LayoutDashboard,
  Settings,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import Logoarea from "./ui/Logoarea"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
    },
    {
      title: "Accounts",
      icon: SquareTerminal,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Detailed Statement",
          url: "#",
        },
        {
          title: "Mini Statement",
          url: "#",
        },
        {
          title: "Inquire Lien",
          url: "#",
        },
        {
          title: "Nominees",
          url: "#",
        },
        {
          title: "Cheques",
          url: "#",
        },
      ],
    },
    {
      title: "Transfers",
      url: "#",
      icon: ExternalLink,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "Change Password",
          url: "#",
        },
        {
          title: "Change Image/Phrase",
          url: "#",
        },
        {
          title: "Set Preferences",
          url: "#",
        },
        {
          title: "View Personal Details",
          url: "#",
        }
      ],
    },
  ],
  
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
      <Logoarea/>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
