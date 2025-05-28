"use client"

import * as React from "react"
import {
  BookOpen,
  Briefcase,
  ExternalLink,
  LayoutDashboard,
  Settings,
  Shield,
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
import { BiNotification } from "react-icons/bi"

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
          title: "Within Bank",
          url: "#",
        },
        {
          title: "SWIFT",
          url: "#",
        },
        {
          title: "RTGS",
          url: "#",
        },
      ],
    },
    {
      title: "Templates & Status",
      url: "#",
      icon: BiNotification,
      items: [
        {
          title: "Templates",
          url: "#",
        }
      ],
    },
    {
      title: "Security Settings",
      url: "#",
      icon: Shield,
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
        
        }
      ],
    },
    {
      title: "Trade",
      url: "#",
      icon: Briefcase,
      items: [
        {
          title: "Trade",
          url: "#",
        }
      ],
    },
    {
      title: "Services",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Services",
          url: "#",
        }
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
