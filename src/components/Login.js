import React, { useState, useEffect } from 'react'

import { useNavigate } from "react-router-dom";
import api from '../util/api';


const Login = () => {


    const navigate = useNavigate();
    const [data, setData] = useState([]);
    
    const [user, setUser] = useState({ name: "", id: "" });

    useEffect(() => {


/*         FETCH DATABASE */
        api().get('./user.json')
            .then((res) => {
                const parsedData = Object.entries(res.data).map(el => {
                    return el[1]
                })
                setData(parsedData)
            })


    }, [])
    /*         REGISTER BUTTON HANDLE */
 const handleReg=(e)=>{
        navigate('/register')
 }


     /*         LOGIN BUTTON HANDLE */
    const handleSubmit = (e) => {
        e.preventDefault();

        //  GetInput Values
        const name = e.target[0].value
        const id = e.target[1].value
    // VERIFY LOGIN && LOCAL STORAGE SET
        if (name && id) {
            data.map((dt) => {
                if (dt.id === id) {
                    window.localStorage.setItem('user',
                        JSON.stringify({ name: name, id: id }));
                     navigate('/dashboard');// open dashboard

                }
                //EROR INPUT
                else {
                    document.getElementById('errorMsg').style.display='block'
                }
            })


        }


        // check login
        //download data
        //


        /* const instance = api();
        // instance.post("/user.json", data)
        //     .then(res => {
        //         console.log(res);
        //     })
        //     .catch(e => {
        //         console.log(e);
        //     }) */

        /* Reset Input */
        e.target[0].value = ""
        e.target[1].value = ""
    }
    useEffect(()=>{
    
    },[])



    return (

        <div className='text-center mt-6 flex flex-col items-center h-[100vh]'>
            <label className='text-xl font-semibold'>Login</label>
            <form className=' h-[30%] mt-6 border' onSubmit={handleSubmit}>

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
                <div id='errorMsg' className='hidden'>           
                     <button className='hover:cursor-default  mt-[1px] px-[2] text-sm text-red-800  shadow-sm
                bg-slate-500'>Error Log In :Try Again</button>
                <br/>
                </div>

                <button type='submit' className='my-2 rounded-md hover:cursor-pointer 
      bg-slate-700 px-4 py-[2px] 
     shadow-md shad shadow-red-900 leading-2'>Login</button>
     <button onClick={handleReg} type="button" className='my-2 rounded-md hover:cursor-pointer 
     bg-slate-700 px-4 py-[2px] 
     shadow-md shad shadow-red-900 leading-2 ml-4'>Register</button>
            </form>
        </div>


    )
}

export default Login