// import React, { useState } from 'react'
// import Card from './Card';
// export default function Home() {
//     const [input, setinput] = useState('')
//   return (
//     <div className='bg-slate-800 min-h-screen flex  justify-center'>
//        <div className='mt-20 text-white text-base'>
//         <h1 className='m-2'>Put ur Task here and Click Add</h1>
//         <textarea onChange={(event)=>{
//             event.preventDefault();
//             setinput(event.target.value);
//         }}value={input} name="input" id="" cols="60" rows="10" placeholder='fuck the Task' className='text-black rounded px-3'></textarea>
//         <button className='m-2' onClick={()=>{
//             console.log(input)
//         }}>Add</button>
//        </div>
//        {<Card input={input}/>}
//     </div>
//   )
// }
import React, { useState } from 'react';
import Card from './Card';

export default function Home() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddButtonClick = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, input]);
      setInput('');
    }
  };
  const handleClickDelete=(index)=>{
    const updatedArray=[...tasks];
    updatedArray.splice(index,1);
    setTasks(updatedArray);
  }

  return (
    <div className='bg-slate-800 min-h-screen flex flex-col justify-center items-center'>
      <div className='text-white text-base mt-22'>
        <h1 className='m-2'>Put your Task here and Click Add</h1>
        <textarea
          onChange={(event) => {
            event.preventDefault();
            setInput(event.target.value);
          }}
          value={input}
          name='input'
          cols='60'
          rows='10'
          placeholder='Enter the Task'
          className='text-black rounded px-3'
        ></textarea>
        <button className='m-2' onClick={handleAddButtonClick}>
          Add
        </button>
      </div>

     <div className='grid grid-cols-4 grid-rows-3 gap-6 shadow-blue-700'>
     {tasks.map((task, index) => (
        <Card key={index} input={task} onDelete={()=>handleClickDelete(index)} />
      ))}
     </div>
    </div>
  );
}
