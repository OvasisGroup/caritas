import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import HeaderNav from "@/components/HeaderNav"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <HeaderNav/>
        {children}
      </main>
    </SidebarProvider>
  )
}
