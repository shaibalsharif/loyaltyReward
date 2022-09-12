import React from 'react'
import { useNavigate } from 'react-router';
import api from '../util/api';

const Register = () => {
    const navigate= useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        /*  GENERATE NEW CODE */
        //  const cDate = new Date();
        // const date = cDate.getDate() + "-" + cDate.getMonth() + "-" + cDate.getFullYear()
        // api().post('./code.json', { date: date, code: id }) 

        /*         Get Input */
        const name = e.target[0].value
        const id = e.target[1].value
       
        if (name && id) {
            const i = api().post('/user.json', { name: name, id: id })
            
            e.target[0].value = ""
            e.target[1].value = ""
            navigate('/login')
        }



    }
    return (
        <div className='text-center mt-6 flex flex-col items-center h-[100vh]'>
            <label className='text-xl font-semibold'>New User Registration</label>
            <form className='h-[30%]  mt-6 border' onSubmit={handleSubmit}>

                <br />
                <div className='flex justify-evenly' >
                    <label htmlFor='name'
                        className='self-start font-semibold'>Enter Name</label>
                    <input type='text' name="name"
                        className='rounded-md
         text-gray-600 font-semibold pl-2 ml-2 '
                        placeholder='Name' />
                </div>

                <br />
                <div className='flex  justify-evenly ' >
                    <label htmlFor='id'
                        className='self-start font-semibold'>Enter ID</label>
                    <input type='text' name='id'
                        className='rounded-md
        text-gray-600 font-semibold pl-2 ml-2   '
                        placeholder='ab10' />
                    <br />
                </div>

                <button type='submit' className='my-2 rounded-md hover:cursor-pointer 
bg-slate-700 px-4 py-[2px] 
shadow-md shad shadow-red-900 leading-2'>Register</button>
            </form>
        </div>
    )
}

export default Register