import { Outlet } from 'react-router-dom'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <Navbar />
      <main className="flex-1">
        <Outlet />
        <FloatingWhatsApp/>
      </main>
      <Footer />
    </div>
  )
}
