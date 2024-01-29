import React from 'react'
import { FaTimes  } from 'react-icons/fa';
export default function Card({input,onDelete}) {
  return (
    <div>
        <div className='bg-yellow-200 rounded text-black p-2 m-2 w-72 h-72 overflow-hidden relative'>
           <h1 className='white-space:pre-wrap'>{input.slice(0,30)}</h1>
           <p className='white-space:pre-wrap'>{input}</p>
           <FaTimes className='bottom-3 right-3 border absolute bg-slate-400 text-red-700 box-content w-10 h-6' 
           onClick={onDelete}
           />
        </div>
    </div>
  )
}
