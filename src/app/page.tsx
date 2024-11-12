

import Customize from "@/components/customize";
import Management from "@/components/management";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Customize2 from "@/components/customize2";
import Work from "@/components/work";
import Sponsors from "@/components/sponsors";
import Footer from "@/components/footer";



export default function Home() {
  return (
    <div>

    <Navbar/>
    <Hero/>
    <Management/>
    <Customize/>
    <Customize2/>
    <Work/>
    <Sponsors/>
    <Footer/>
    
    </div>
  );
}
