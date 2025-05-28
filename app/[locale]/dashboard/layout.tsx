import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import HeaderNav from "@/components/HeaderNav"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full h-screen">
        <HeaderNav/>
        <div className="px-6 py-4">{children}</div>
      </main>
    </SidebarProvider>
  )
}
