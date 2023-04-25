// Children of useContextHook

import React, { useContext } from 'react'
import { AppContext } from '../UseContextHook'

function User() {

    // Rendering 'username' value from 'Parent page(UseConextHook.js)'. Here use 'useContext' to use the value of parents page
    const {username} = useContext(AppContext);

  return (
    <div>
        <h1 className='text-xl'>User: {username}</h1>
    </div>
  )
}

export default User