import './App.css'
import './style.css'
import {Route, Routes} from 'react-router-dom';
import {Home, Login, Register, SinglePost, Write}from './pages/index'
import RootLayout from './layout/RootLayout';
import AuthLayout from './layout/AuthLayout';
import {  Toaster } from 'react-hot-toast';
function App() {
 

  return (
    <main className='main-container'>
      <Toaster position='top-right'  toastOptions={{duration:2000}} />
      <Routes>
        <Route element={<AuthLayout/>}>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Route>
        <Route element={<RootLayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/post/:id' element={<SinglePost/>}/>
          <Route path='/write' element={<Write/>}/>
        </Route>
      </Routes>
    </main>
  )
}

export default App
