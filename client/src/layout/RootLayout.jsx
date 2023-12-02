import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet,Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const RootLayout = () => {
  const {userInfo} = useSelector((state) => state.auth)
  return (
    <section className="px-4 md:px-28">
        <Navbar/>
        {userInfo ? <Outlet/> : <Navigate to='/login'/> }
        <Footer/>
    </section>
  )
}

export default RootLayout