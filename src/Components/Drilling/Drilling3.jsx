import React from 'react'

const Drilling3 = ({x,setX}) => {
  
  
  const increment = () => setX(x + 1)


  return (
    
    <div className='flex flex-col font-semibold text-xl '>
      <span>ComponentC</span>
      <span>X={x}</span>
      <button
      onClick={increment}
      className='
      flex 
      justify-center 
      border 
      border-black  
      rounded-md 
      w-[50px]
      h-[30px]
      bg-cyan-600
      '
      >
        X++
      </button>
    </div>
  )
}

export default Drilling3