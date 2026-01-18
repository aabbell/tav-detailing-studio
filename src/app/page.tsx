import Header from "./components/header";
import Navbar from "./components/nav";
import Services from "./components/services";
import Contact from "./components/contact";
import Footer from "./components/footer"
import Prices from "./components/prices";
export default function Home() {
  console.log(process.env.NEXT_PUBLIC_supabaseUrl)
  return(
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Services></Services>
      <Prices></Prices>
      <Contact></Contact>
      <Footer></Footer>
    </div>

  )
}
