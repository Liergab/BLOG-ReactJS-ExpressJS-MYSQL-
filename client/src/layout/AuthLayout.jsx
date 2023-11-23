import { Outlet } from "react-router-dom"
import blog from "../assets/images/blog.jpg"
const AuthLayout = () => {
  return (
    <section className="flex w-full">
        <div className="lg:flex-1 flex flex-col w-full h-screen items-center place-content-center px-4">
            <Outlet/>
        </div>
        <div className="lg:flex-1">
            <img src={blog} alt="" className="hidden lg:block h-screen object-cover bg-no-repeat"/>
        </div>
    </section>
  )
}

export default AuthLayout