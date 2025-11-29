import Header from "./components/header";
import Navbar from "./components/nav";
import Services from "./components/services";
import Contact from "./components/contact";
import Footer from "./components/footer"
export default function Home() {
  return(
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Services></Services>
      <Contact></Contact>
      <Footer></Footer>
    </div>

  )
}
