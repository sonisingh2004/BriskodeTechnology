
import Choose from "../components/home/Choose";
import Clients from "../components/home/Clients";
import Hero from "../components/home/Hero";
import HomeAbout from "../components/home/HomeAbout";
import HomeContact from "../components/home/HomeContact";
import HomeServices from "../components/home/HomeServices";
import Navbar from "../components/Navbar";


export default function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <HomeAbout />
      <HomeServices />
      <Clients/>
      <Choose/>
      <HomeContact/>
      
    </>
  );
}
