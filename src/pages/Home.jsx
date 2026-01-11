import Choose from "../components/Choose";
import Clients from "../components/Clients";
import Hero from "../components/Hero";
import HomeAbout from "../components/HomeAbout";
import HomeContact from "../components/HomeContact";
import HomeServices from "../components/HomeServices";
import Navbar from "../components/Navbar";


export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeAbout />
      <HomeServices />
      <Clients/>
      <Choose/>
      <HomeContact/>
      
    </>
  );
}
