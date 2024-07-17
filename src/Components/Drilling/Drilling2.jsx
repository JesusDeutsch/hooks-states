import React, { useState } from 'react'
import Drilling1 from './Drilling1'
import Drilling3 from './Drilling3'

const Drilling2 = () => {

  const [x , setX] = useState(42) 

  return (
    
    <div className='flex justify-center mt-6'>
      <div className='flex flex-col w-[750px] h-[500px] border-2 border-black p-6 text-xl font-semibold gap-2'>
      <Drilling1 x={x}/>
      
      <div className='flex flex-col p-7 w-[700px] h-[400px] border-2 border-black text-xl font-semibold gap-2'>
            <span>ComponentB</span>
            <span>X={x}</span>
          
            <div className='flex flex-col p-6 w-[600px] h-[200px] border-2 border-black'>
              <Drilling3 x={x} setX={setX}/>
            </div>
          </div>
      
      
      </div>
    </div>

  )
}

export default Drilling2