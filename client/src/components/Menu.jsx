import blog from '../assets/images/blog.jpg';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
const Menu = () => {
    const posts =[
        {
          id:1,
          title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          decs:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          img:blog
        },
        {
          id:2,
          title:"Sample title",
          decs:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          img:blog
        },
        {
          id:3,
          title:"Sample title",
          decs:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          img:blog
        }
      ]
  return (
    <div className='flex flex-col gap-10'>
        <h1 className='gradientLogo font-semibold text-xl'>Other posts you may like</h1>
        {posts.map((post) => (
            <div key={post.id} className='flex flex-col gap-3'>
                <img src={post.img} alt=""  className='w-full h-[200px] object-cover'/>
                <Link to={`/post/${post.id}`}>
                     <p className='text-2xl font-bold'>{post.title}</p>
                </Link> 
                <Button className='w-max bg-secondary'>Read More</Button>
            </div>
        ))}
    </div>
  )
}

export default Menu
