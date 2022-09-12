import React from 'react'
import StampBody from './StampBody'
import api from '../util/api'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'





const Dashboard = () => {
  const navigate= useNavigate()
  const [userId, setUserid] = useState()
  const [logState, setlog] = useState(false)
  useEffect(() => {
    //setUserId
  }, [userId])
  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      console.log(user);
      setlog(true)
    }

  }, [])
  const handleLogout = () => {
    setlog(false)
    localStorage.clear();
    navigate('/')


  }
  const handleSubmit = () => {

    //getUser from localStorage

    //getkey Input

    //

  }

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ]

  return (
    <div className='text-center'>
      {logState ? <button type="button" onClick={handleLogout} className='my-2 rounded-md hover:cursor-pointer 
    bg-slate-700 px-4 py-[2px] absolute top-2 right-[20%] hover:animate-pulse
    shadow-md shad shadow-red-900 leading-2 ml-4'>Logout</button>
        : <div></div>}
      <form onSubmit={handleSubmit} className='m-2 mt-4 text-center space-x-2'>
        <input type="text"
          className="bg-slate-600 text  pl-4 " placeholder='' />
        <button type='submit'
          className=' bg-slate-600 hover:bg-slate-700 hover:scale-110 rounded-md px-2'>Enter Code</button>
      </form>
     <StampBody userID={userId} />
    

      
    </div>
  )
}

export default Dashboard