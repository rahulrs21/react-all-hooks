// Children of useContextHook

import React, { useContext } from 'react'
import { AppContext } from '../UseContextHook'

function Login() {
    // Rendering 'setUsername' value from 'Parent page(UseConextHook.js)'. Here use 'useContext' to use the value of parents page
  const {setUsername} = useContext(AppContext);
  return (
    <div className='flex items-center my-2'>
        <label htmlFor="username">Enter your Username:</label>
        <input className='w-[70%] p-3 border  border-blue-300 focus:outline-blue-500 mx-10' type="text" onChange={(e) => {setUsername(e.target.value)}} />
    </div>
  )
}

export default Login