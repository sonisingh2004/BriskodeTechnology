import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import About from '../pages/About'
import Gallery from '../pages/Gallery'
import Home from '../pages/Home'
import Service from '../pages/Service'


export default function AppRoutes() {
  return (
    <Routes>
      {/* Layout Route */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About/>} />
        <Route path="services" element={<Service/>} />
        <Route path="gallery" element={<Gallery />} />
      </Route>

    
    </Routes>
  )
}
