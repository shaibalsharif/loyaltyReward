import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import api from '../util/api'
import Stamp from '../components/Stamp'
const StampBody = ({userID}) => {

    const [data, setData] = useState({})
    const [userId, setUserId] = useState(userID)

    useEffect(() => {
         setUserId(JSON.parse(localStorage.getItem('user'))['id']);
         api().get('/user.json')
            .then(res => {
                setData(res.data)
                
            })
            // .then((res)=>{
            //     console.log(res);
            // })
            .catch((e) => console.log(e))

    }, [])
    // console.log(data);
    Object.entries(data).map((dt, index) => {

        console.log(dt);
    })
    return (
        <div className='text-center items-center content-center'>
            <div className='lg:mx-[20%]  mx-4 mt-2 flex justify-center flex-wrap ' >
                {
                    data ? Object.entries(data).map((dt, index) =>
                        <Stamp key={index}
                            name={dt[1].name}
                            id={dt[1].id} />)
                        : <div></div>
                }
            </div>
        </div>
    )
}

export default StampBody