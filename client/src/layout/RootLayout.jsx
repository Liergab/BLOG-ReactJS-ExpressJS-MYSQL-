import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <section className="px-4 md:px-28">
        <Navbar/>
        <Outlet/>
        <Footer/>
    </section>
  )
}

export default RootLayout