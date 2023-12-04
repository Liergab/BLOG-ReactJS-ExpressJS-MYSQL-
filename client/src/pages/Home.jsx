import React from 'react'
import blog from '../assets/images/blog.jpg';
import { Link } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import { useGetAllPost } from '../api/post';
import { useState } from 'react';


const Home = () => {
  const [showFullText, setShowFullText] = useState(false);
  const toggleText = () => {
    setShowFullText(!showFullText);
  };
  const limitText = (text, limit) => {
    const words = text.split(' ');
    const limitedWords = words.slice(0, limit);
    return limitedWords.join(' ');
  };

  const {data:posts, isPending } =  useGetAllPost()

  if(isPending) return <h1>Loading..</h1>
  return (
    <main >
      <div className='flex flex-col mt-32 gap-32'>
        {posts.map((post) => (
          <div key={post?.id} className='space-y-8 md:space-y-0 md:flex gap-14 odd:flex-row-reverse '>
            <div className='md:flex-[2]  '>
             {post?.image &&
              (<img src={`http://localhost:3001/images/${post?.image}` || blog} alt="" 
                className='w-full max-h-[250px] md:max-h-[400px] lg:max-h-[400px] object-cover rounded-lg'/>)} 
            </div> 
            <div className='flex-[3] md:flex flex-col justify-between  gap-10 space-y-6 md:space-y-0'>
              <Link to={`/post/${post.id}`}>
                <h2 className='text-2xl md:text-5xl font-bold'>{post?.title}</h2>
              </Link>
              <h1 className='text-base md:text-lg font-normal text-justify'>
              {showFullText ? post?.desc : limitText(post?.desc, 100)}
              </h1>
              {post?.desc && post.desc.split(' ').length > 100 && (
              <Button className='bg-secondary w-max' onClick={toggleText}> 
                 {showFullText ? 'Read Less' : 'Read More'}
              </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Home