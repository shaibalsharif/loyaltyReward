import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

const Header = () => {
const [logState,setlog]=useState(false);
useEffect(()=>{
  const user=localStorage.getItem('user')
  if(user){
    console.log(user);
    setlog(true)
  }
 
},[])
const navigate= useNavigate()
const handleLogout=()=>{
  setlog(false)
  localStorage.clear();
  navigate('/')


}


  return (
    <header className='flex justify-between h-16 bg-gray-700'>
    <div className='text-center relative w-[50%]'>
      <p className='text-white-900 w-48 absolute right-0 mt-2 text-right leading-8
       bg-red-800 text-3xl font-extrabold'>
        Crimson Cup</p>
    </div>
    
    
    <div className='logo'>
      <a href='https://crimsoncup.business.site/'><img src='./crimson.png' alt='logo' className='h-12' />
      </a></div>
  </header>
  )
}

export default Header