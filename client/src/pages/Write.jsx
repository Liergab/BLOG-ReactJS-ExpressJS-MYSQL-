import { Input } from '@material-tailwind/react'
import React from 'react'

const Write = () => {
  return (
    <section className='flex gap-10'>
      <div className='flex-[5] mt-28 '>
        <div className='w-auto'>
        <Input
           type="text"
            size="lg"
            placeholder="Title"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-max"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            
          />
        </div>
       
        
     
      </div>
      <div className='flex-[2]'>
        <div>item 1</div>
        <div>item 2</div>
      </div>
    </section>
  )
}

export default Write