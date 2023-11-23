import React from 'react'
import blog from '../assets/images/blog.jpg';
import { Link } from 'react-router-dom';
import { Button } from '@material-tailwind/react';

const Home = () => {
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
    <main >
      <div className='flex flex-col mt-14 gap-32'>
        {posts.map((post) => (
          <div key={post.id} className='flex gap-14 odd:flex-row-reverse '>
            <div className='flex-[2]  post_box-showdow '>
              <img src={post.img} alt=""  className='w-full max-h-[400px] object-cover'/>
             
            </div> 
            <div className='flex-[3] flex flex-col justify-between '>
              <Link to={`/post/${post.id}`}>
                <h2 className='text-5xl font-bold'>{post.title}</h2>
              </Link>
              <h1 className='text-lg font-normal'>{post.decs}</h1>
              <Button className='bg-secondary w-max'>Read More...</Button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Home