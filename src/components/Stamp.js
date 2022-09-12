import React from 'react'

const Stamp = ({name='jony',id="ia34"}) => { 
    return (
        <div className='m-4 card-container bg-slate-500 border-2 rounded-[10px] p-4 w-36 h-[]'>
        
            <img src="./crimson.png" alt="stamplogo" />
            
            <div className='card-Deatils bg-slate-600 rounded-md p-2'>
            <p>Crimson Cup</p>
            <p>{name}</p>
            <p>{id}</p>

            </div>
            

        </div>
    )
}

export default Stamp