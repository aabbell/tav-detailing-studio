import About from "./components/About";
import Navbar from "./components/nav";
import Services from "./components/services";
import Contact from "./components/contact";
import Footer from "./components/footer"
import Prices from "./components/prices";
export default function Home() {
  console.log(process.env.NEXT_PUBLIC_supabaseUrl)
  return(
    <div>
      <div id="Navbar">
        <Navbar></Navbar>
      </div>
      <div id="About">
        <About></About>
      </div>
      <div id="Services">
        <Services></Services>
      </div>
      <div id="Prices">
        <Prices></Prices>
      </div>
      <div id="Contact">
       <Contact></Contact>
      </div>
      <div id="Footer">
       <Footer></Footer>
      </div>
    </div>

  )
}
