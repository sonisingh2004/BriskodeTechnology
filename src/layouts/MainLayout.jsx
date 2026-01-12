import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import FloatingWhatsApp from '../components/FloatingWhatsApp'

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
