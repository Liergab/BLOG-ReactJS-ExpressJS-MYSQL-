import {Button} from '@material-tailwind/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import { useState } from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(prev => !prev)
    }

  return (
    <nav className='nav_container '>
        <div className='flex item-center justify-between'>
            <Link to='/'>
                <h1 className='gradientLogo text-3xl font-bold  ' >BLOG ✒️</h1>
            </Link>
        <div className='block lg:hidden' onClick={handleClick}>
           {isOpen 
            ? <XMarkIcon className='text-text w-10 h-10 ' />
            : <Bars3Icon className='text-text w-10 h-10 ' /> 
           }
        </div>
        </div>
        <div className='hidden lg:block'>
            <ul className='ul_container'>
                <li><Button variant='text'>Art</Button></li>
                <li> <Button variant='text'>Science</Button></li>
                <li> <Button variant='text'>Technology</Button></li>
                <li> <Button variant='text'>Cinema</Button></li>
                <li> <Button variant='text'>Design</Button></li>
                <li> <Button variant='text'>Food</Button></li>
                <li> <Button variant='text'>Jhon</Button></li>
                <li> <Button variant='text'>Logout</Button></li>
                <Link to='/write'>
                    <li> <Button variant='text'>Write</Button></li>
                </Link>
            </ul>
        </div>
        {/* md device */}
        {isOpen &&
        <div className='mt-4'>
            <ul className='flex flex-col space-y-4'>
                <li><Button variant='text'>Art</Button></li>
                <li> <Button variant='text'>Science</Button></li>
                <li> <Button variant='text'>Technology</Button></li>
                <li> <Button variant='text'>Cinema</Button></li>
                <li> <Button variant='text'>Design</Button></li>
                <li> <Button variant='text'>Food</Button></li>
                <li> <Button variant='text'>Jhon</Button></li>
                <li> <Button variant='text'>Logout</Button></li>
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