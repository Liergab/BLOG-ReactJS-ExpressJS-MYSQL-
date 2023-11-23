import {
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import { useEffect } from "react";
import {Link} from "react-router-dom";

const registerSchema = yup.object().shape({
  username:yup.string().required('Username is Required!').min(2),
  email:yup.string().email().required('Email is Required!'),
  password:yup.string().required('Password is Required!').min(8).max(20),
  confirmPassword:yup.string().oneOf([yup.ref('password'),null],'Password does not match').required('Confirming the password is required!')
})

const Register = () => {

  

  const{register,
        handleSubmit,
        reset, 
        formState,
         formState:{errors,isSubmitSuccessful}} = useForm({
          resolver:yupResolver(registerSchema)
         })

  const onSubmit = (data) => {
    console.log(data)
  }

  useEffect(() => {
    if(formState.isSubmitSuccessful){
      return reset()
    }
  },[formState,isSubmitSuccessful,reset])



  return (
    <>
    <div className="flex flex-col gap-2">
      <Typography variant="h4" color="blue-gray" className="text-gray">
        Register
      </Typography>
      <Typography color="blue-gray" className="mt-1 w-auto text-sm md:text-base">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}
        className="mt-8 mb-2  max-w-screen-lg   w-auto lg:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Input
          type="text"
            size="lg"
            placeholder="username"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("username")}
          />
           {errors.username && <span className="text-sm text-red-600">{errors.username.message}</span>}
          <Input
           type="text"
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 "
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("email")}
          />
           {errors.email && <span className="text-sm text-red-600">{errors.email.message}</span>}
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("password")}
          />
           {errors.password && <span className="text-sm text-red-600">{errors.password.message}</span>}
           <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("confirmPassword")}
          />
           {errors.confirmPassword && <span className="text-sm text-red-600">{errors.confirmPassword.message}</span>}
        </div>
        <Button type="submit"
          className="mt-6 bg-accent" fullWidth >
          register
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-accent">
            Login
          </Link>
        </Typography>
      </form>
    </div>
    </>
    
  )
}

export default Register