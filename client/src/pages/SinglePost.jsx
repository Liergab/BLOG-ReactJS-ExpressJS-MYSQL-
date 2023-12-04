 import { Link,useParams,useNavigate } from "react-router-dom"
import blog from "../assets/images/blog.jpg"
 import {PencilSquareIcon, TrashIcon} from "@heroicons/react/24/outline"
import Menu from "../components/Menu"
import {useSelector} from 'react-redux'
import { useDeletePost, useGetPostById } from "../api/post"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { QUERY_KEYS } from "../api/queryKey"
import { Spinner } from "@material-tailwind/react"
import toast from "react-hot-toast"
import { timeAgo } from "../helper"
const SinglePost = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const deletePost = useMutation({
    mutationFn:useDeletePost,
    onSuccess: () => {
      navigate('/')
      toast.success('successfull deleted!')
      queryClient.invalidateQueries({queryKey:[QUERY_KEYS.GET_POST_BY_ID]})
    }
  })
  const{id} = useParams()
  const {userInfo}  = useSelector((state) => state.auth)
  const {data:post , isPending} = useGetPostById(id)
  const handleDelete = (id) => {
    try {
        deletePost.mutate(id)
    } catch (error) {
      console.log(error)
    }
  }
  if(isPending) return <Spinner />
  return (
   <section className="md:flex gap-12 mt-28 space-y-10 md:space-y-0">
    <div className="flex-[5] flex flex-col gap-6">
       <img src={`http://localhost:3001/images/${post?.image}`} alt="" className="w-full h-80 object-cover rounded-2xl" />
       <div className="flex gap-4 items-center">
          <img src={blog} alt="" className="rounded-full h-12 w-12"/>
          <div className="">
            <h1 className="text-xl font-bold">{post?.userPost?.username}</h1>
            <h1 className="text-sm font-thin">{timeAgo(post?.createdAt)}</h1>
          </div>
          { userInfo._id === post?.userPost?.id &&
          <div className="flex items-center gap-3">
            <Link to={`/update/${post?.id}`}>
              <PencilSquareIcon className="h-5 w-5  rounded-full bg-accent " />
            </Link>
            <TrashIcon className="h-5 w-5 rounded-full bg-red-400 " onClick={() => handleDelete(post?.id)}/>
            
          </div>
          }
       </div>
       <h1>{post?.title}</h1>
       <br />
       <p className="text-justify leading-7">{post?.desc}</p>
    </div>
    <div className="flex-[2]">
      <Menu cat={post?.cat}/>
    </div>
   </section>
  )
}

export default SinglePost
