import React, { useState } from 'react'

function HookUseState() {

  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count+1);
  }
  const handleDecrement = () => {
    if(count>=1) {
        setCount(count-1);
    }
  }

  const [email, setEmail] = useState("");
  
  const handleOnchange = (event) => {
    setEmail(event.target.value);
  }


  return (
    <div className='flex flex-col max-w-7xl justify-center mx-auto text-center my-12'>
            <h1 className='text-3xl font-semibold underline my-5'>USE STATE</h1>
            <div className='flex justify-center item-center my-2'>
                <button className='bg-blue-400 p-2 rounded' onClick={handleDecrement}>Decrement</button><span className='font-bold text-xl mx-5'>{count}</span><button className='bg-red-400 p-2 rounded' onClick={handleIncrement}>Increment</button> 
            </div>
            <div className='mt-5  space-y-5'>
                <div className='flex '>
                    <label htmlFor="EMail1">Enter your Email Address:</label>
                    <input className='w-[70%] p-3 border  border-blue-300 focus:outline-blue-500 mx-10' type="email" placeholder='Enter your email adress' onChange={handleOnchange} />
                </div>
                <div className='flex '>
                    <label htmlFor="EMail2">Confirm your Email Address:</label>
                    <input className='w-[70%]  p-3 border border-red-300 focus:outline-red-500 mx-5' type="email" placeholder='Enter your email adress' value={email} />
                </div>
                
            </div>
            
            
    
    
        </div>
  )
}

export default HookUseState