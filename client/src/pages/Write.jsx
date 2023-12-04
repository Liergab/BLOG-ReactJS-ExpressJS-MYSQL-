import { Button, Input,Textarea } from '@material-tailwind/react'
import 'react-quill/dist/quill.snow.css';
import {useForm} from 'react-hook-form'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useCreatePost } from '../api/post';
import { useNavigate } from 'react-router-dom';
import { QUERY_KEYS } from '../api/queryKey';

const Write = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient()
  const createPost = useMutation({
    mutationFn:useCreatePost,
    onSuccess:() => {
      navigate('/')
      queryClient.invalidateQueries({queryKey:[QUERY_KEYS.GET_ALL_POST]})
    }
  })

  const { register, handleSubmit } = useForm();
 
  const onSubmit = async(data) => {
        try {
          await createPost.mutateAsync({...data, image:data.image[0]})
        } catch (error) {
          console.log(error)
        }
    };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <section className='md:flex gap-10 mt-14'>
      <div className='flex-[5] flex flex-col gap-8'>
       
        <Input
           type="text"
            size="lg"
            placeholder="Title"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 "
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register('title')}
          />

          <Textarea size="lg" 
            placeholder="Textarea Medium"  resize={true} 
            {...register('desc')} 
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 h-[300px]"
            labelProps={{
              className: "before:content-none after:content-none",
            }} />  
        
       
        
     
      </div>
      <div className='flex-[2] flex flex-col gap-10'>
        <div className='flex-1 flex flex-col p-3  justify-between border border-blue-gray-300 gap-6  bg-secondary'>
          <h1 className='gradientLogo'>Publish</h1>
          <input type="file"  id='file' className='hidden'  {...register('image')}/>
          <label htmlFor="file" className='underline'>Upload file</label>
          <Button className='bg-accent w-max' type='submit'>publish</Button>
        </div>
        <div className='flex-1 flex flex-col p-3 items-start justify-between border border-blue-gray-300 bg-secondary '>
          <h1>Category</h1>
          <input type='radio' value='art' id='art' {...register('cat')}/>
          <label htmlFor="art">Art</label>
          <input type='radio' value='science'  id='science'  {...register('cat')}/>
          <label htmlFor="science">Science</label>
          <input type='radio' value='technology'  id='tech'  {...register('cat')}/>
          <label htmlFor="tech">Technology</label>
          <input type='radio'value='cinema'  id='cinema' {...register('cat')}/>
          <label htmlFor="cinema">Cinema</label>
          <input type='radio' value='design'  id='design' {...register('cat')} />
          <label htmlFor="design">Design</label>
          <input type='radio' value='food'  id='food' {...register('cat')}/>
          <label htmlFor="food">Food</label>
        </div>
      </div>
    </section>
    </form>
  )
}

export default Write