import './App.css'
import { Outlet, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { auth } from './firebase'
import { ToastContainer, toast } from 'react-toastify';
  


function App() {

    const navigate =useNavigate();

    useEffect(()=>{
        onAuthStateChanged(auth,async(user)=>{
            if(user){
                console.log('Logged In');
                navigate('/')
            }else{
                console.log('Logged Out');
                navigate('/login')
            }
        })
    },[])


  return (
    <>
        <ToastContainer theme='dark' />
        <div className='bg-black text-white min-h-screen'>
            <Outlet />
        </div>
    </>
  )
}

export default App
