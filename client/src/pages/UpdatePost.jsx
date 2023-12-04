import { Button, Input,Textarea } from '@material-tailwind/react'
import {useForm, Controller} from 'react-hook-form'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useGetPostById, useUpdatePost } from '../api/post';
import { useNavigate, useParams } from 'react-router-dom';
import { QUERY_KEYS } from '../api/queryKey';

const UpdatePost = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient()
  const updatePost = useMutation({
    mutationFn:useUpdatePost,
    onSuccess:() => {
      navigate('/')
      queryClient.invalidateQueries({queryKey:[QUERY_KEYS.GET_ALL_POST]})
    }
  })
  const {data:post, isPending} = useGetPostById(id)

  const { control,register, handleSubmit } = useForm();
 
  const onSubmit = async(data) => {
    console.log(data)
        try {
           await updatePost.mutateAsync({...data, id, image:data.image[0]})
        } catch (error) {
          console.log(error)
        }

    };
    if(isPending) return <h1>Loading..</h1>
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <section className='md:flex gap-10 mt-14'>
      <div className='flex-[5] flex flex-col gap-8'>
        <Controller 
        name='title'
        control={control}
        defaultValue={post?.title}
        render = {({field}) => (
            <Input
           type="text"
            size="lg"
            value={field.value}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 "
            onChange={(e) => field.onChange(e.target.value)}
          />
        )}
        />
       
        
        <Controller 
        name='desc'
        control={control}
        defaultValue={post?.desc}
        render ={({field}) => (

            <Textarea size="lg" 
            placeholder="Textarea Medium"  resize={true} 
            value={field.value}
            onChange={(e) => field.onChange(e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 h-96"
            />  
        )}
        />
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
          <div className='flex'>
            <input type='radio' value='art' id='art' {...register('cat')}/>
            <label htmlFor="art">Art</label>
          </div>
          <div className='flex'>
            <input type='radio' value='science'  id='science'  {...register('cat')}/>
            <label htmlFor="science">Science</label>
          </div>
          <div className='flex'>
            <input type='radio' value='technology'  id='tech'  {...register('cat')}/>
            <label htmlFor="tech">Technology</label>
          </div>
          <div className='flex'>
            <input type='radio'value='cinema'  id='cinema' {...register('cat')}/>
            <label htmlFor="cinema">Cinema</label>
         </div>
         <div className='flex'>
            <input type='radio' value='design'  id='design' {...register('cat')} />
            <label htmlFor="design">Design</label>
          </div>
          <div className='flex'>
            <input type='radio' value='food'  id='food' {...register('cat')}/>
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </section>
    </form>
  )
}

export default UpdatePost