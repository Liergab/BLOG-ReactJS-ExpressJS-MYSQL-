import {Button} from '@material-tailwind/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {  useSelector, useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { useLogoutApi } from '../api/auth';
import { setCredentials } from '../slices/authSlice';


const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userLogout = useMutation({mutationFn: useLogoutApi})
    const {userInfo} = useSelector((state) => state.auth)
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(prev => !prev)
    }

    const handleLogout = async() =>  {
    try {
        await userLogout.mutateAsync()
         dispatch(setCredentials(null))
         localStorage.removeItem('userInfo')
        
        if(userInfo){
            navigate('/login')
        }
    } catch (error) {
        console.log(error)
    }
        
}
   

  return (
    <nav className='nav_container '>
        <div className='flex item-center justify-between'>
            <Link to='/'>
                <h1 className='gradientLogo text-xl md:text-3xl font-semibold md:font-bold  ' >BLOG ✒️</h1>
              
            </Link>
        <div className='block lg:hidden' onClick={handleClick}>
           {isOpen 
            ? <XMarkIcon className='text-text w-6 md:w-10 h-6 md:h-10 ' />
            : <Bars3Icon className='text-text w-6 md:w-10 h-6 md:h-10 ' /> 
           }
        </div>
        </div>
        <div className='hidden lg:block'>
            <ul className='ul_container'>
                <Link to={`?cat=art`}><li><Button variant='text'>Art</Button></li></Link>
                <Link to={`?cat=science`}><li> <Button variant='text'>Science</Button></li></Link>
                <Link to={`?cat=technology`}><li> <Button variant='text'>Technology</Button></li></Link>
                <Link to={`?cat=cinema`}><li> <Button variant='text'>Cinema</Button></li></Link>
                <Link to={`?cat=design`}><li> <Button variant='text'>Design</Button></li></Link>
                <Link to={`?cat=food`}><li> <Button variant='text'>Food</Button></li></Link>
                <li> <Button variant='text' className='gradientLogo'>{userInfo?.username}</Button></li>
                <li > <Button variant='text' onClick={handleLogout}>Logout</Button></li>
                <Link to='/write'>
                    <li> <Button variant='text'>Write</Button></li>
                </Link>
            </ul>
        </div>
        {/* md device */}
        {isOpen &&
        <div className='mt-4'>
            <ul className='flex flex-col space-y-4'>
                <Link to={`?cat=art`}><li><Button variant='text'>Art</Button></li></Link>
                <Link to={`?cat=science`}><li> <Button variant='text'>Science</Button></li></Link>
                <Link to={`?cat=technology`}><li> <Button variant='text'>Technology</Button></li></Link>
                <Link to={`?cat=cinema`}><li> <Button variant='text'>Cinema</Button></li></Link>
                <Link to={`?cat=design`}><li> <Button variant='text'>Design</Button></li></Link>
                <Link to={`?cat=food`}><li> <Button variant='text'>Food</Button></li></Link>
                <li> <Button variant='text' className='gradientLogo'>{userInfo?.username}</Button></li>
                <li > <Button variant='text' onClick={handleLogout}>Logout</Button></li>
                <Link to='/write'>
                    <li> <Button variant='text'>Write</Button></li>
                </Link>
            </ul>
        </div>
        }
    </nav>
  )
}

export default Navbar