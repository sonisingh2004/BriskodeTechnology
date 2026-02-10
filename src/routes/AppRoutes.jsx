import { Route, Routes } from 'react-router-dom'
import ScrollToTop from '../components/ScrollToTop'
import MainLayout from '../layouts/MainLayout'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Gallery from '../pages/Gallery'
import Home from '../pages/Home'
import Internship from '../pages/Internship'
import Portfolio from '../pages/Portfolio'
import Service from '../pages/Service'
import ThankYou from '../pages/ThankYou'


export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Layout Route */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About/>} />
          <Route path="services" element={<Service/>} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="internship" element={<Internship/>} />
          <Route path='contact' element={<Contact/>}/>
          <Route path="/thank-you" element={<ThankYou />} />
        </Route>

    
      </Routes>
    </>
  )
}
