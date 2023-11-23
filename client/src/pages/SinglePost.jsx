 import { Link } from "react-router-dom"
import blog from "../assets/images/blog.jpg"
 import {PencilSquareIcon, TrashIcon} from "@heroicons/react/24/outline"
import Menu from "../components/Menu"

const SinglePost = () => {
  return (
   <section className="flex gap-12 mt-28">
    <div className="flex-[5] flex flex-col gap-6">
       <img src={blog} alt="" className="w-full h-80 object-cover" />
       <div className="flex gap-4 items-center">
          <img src={blog} alt="" className="rounded-full h-12 w-12"/>
          <div className="">
            <h1 className="text-xl font-bold">Byan Gabriel</h1>
            <h1 className="text-sm font-thin">2days ago</h1>
          </div>
          <div className="flex items-center gap-3">
            <Link to={`/write?edit=2`}>
              <PencilSquareIcon className="h-5 w-5  rounded-full bg-accent " />
            </Link>
            <TrashIcon className="h-5 w-5 rounded-full bg-red-400  " />
          </div>
       </div>
       <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
       <br />
       <p className="text-justify leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem
          ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
           incididunt ut labore et dolore magna aliqua</p>
          <br />
          <p className="text-justify leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem
          ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
           incididunt ut labore et dolore magna aliqua</p>

    </div>
    <div className="flex-[2]">
      <Menu />
    </div>
   </section>
  )
}

export default SinglePost
