import { Button, Input } from '@material-tailwind/react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
const Write = () => {
  const [value, setValue] = useState('');
  return (
    <section className='flex gap-10 mt-14'>
      <div className='flex-[5] flex flex-col gap-8'>
       
        <Input
           type="text"
            size="lg"
            placeholder="Title"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 "
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />

          <div className='h-[200px] overflow-scroll  borderLine hide-scrollbar'>
          <ReactQuill theme="snow" value={value} onChange={setValue}  className='  h-full borderNone ' />
          </div>
        
       
        
     
      </div>
      <div className='flex-[2] flex flex-col gap-10'>
        <div className='flex-1 flex flex-col p-3  justify-between border border-blue-gray-300 gap-6  bg-secondary'>
          <h1 className='gradientLogo'>Publish</h1>
          <input type="file"  id='file' className='hidden'/>
          <label htmlFor="file" className='underline'>Upload file</label>
          <Button className='bg-accent w-max'>Update</Button>
        </div>
        <div className='flex-1 flex flex-col p-3 items-start justify-between border border-blue-gray-300 bg-secondary '>
          <h1>Category</h1>
          <input type='radio' id='art'/>
          <label htmlFor="art">Art</label>
          <input type='radio' id='science'/>
          <label htmlFor="science">Science</label>
          <input type='radio' id='tech'/>
          <label htmlFor="tech">Technology</label>
          <input type='radio' id='cinema'/>
          <label htmlFor="cinema">Cinema</label>
          <input type='radio' id='design'/>
          <label htmlFor="design">Design</label>
          <input type='radio' id='food'/>
          <label htmlFor="food">Food</label>
        </div>
      </div>
    </section>
  )
}

export default Write