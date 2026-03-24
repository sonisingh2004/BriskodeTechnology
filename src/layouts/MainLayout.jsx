import { Outlet } from 'react-router-dom'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SiteIntroPopup from '../components/SiteIntroPopup'


export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteIntroPopup />
      
      <Navbar />
      <main className="flex-1">
        <Outlet />
        <FloatingWhatsApp/>
      </main>
      <Footer />
    </div>
  )
}
