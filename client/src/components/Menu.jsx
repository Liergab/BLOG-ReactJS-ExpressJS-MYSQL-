import blog from '../assets/images/blog.jpg';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { useGetAllPost } from '../api/post';
const Menu = () => {
   

    const {data:posts, isPending } =  useGetAllPost()
    if(isPending) return <h1>Loading...</h1>
    
  return (
    <div className='flex flex-col gap-10'>
        <h1 className='gradientLogo font-semibold text-xl'>Other posts you may like</h1>
        {
          posts ? 
          <>{posts.map((post) => (
            <div key={post?.id} className='flex flex-col gap-3'>
               <img src={`http://localhost:3001/images/${post?.image}`} alt=""  className='w-full h-[200px] object-cover rounded-2xl'/>
                <Link to={`/post/${post?.id}`}>
                     <p className='text-2xl font-bold'>{post?.title}</p>
                </Link> 
                <Button className='w-max bg-secondary'>Read More</Button>
            </div>
        ))}</> 
        : <h1> no post </h1>
        }
       
    </div>
  )
}

export default Menu
