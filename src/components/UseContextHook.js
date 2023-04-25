// Here  we created 1 Parent and 2 children(Login, User) -> which is inside plugin folder.

import React, { createContext, useState } from 'react'
import Login from './plugin/Login';
import User from './plugin/User';


export const AppContext = createContext(null);   
// First u need to assign with 'createContext()' and export this
// Then where you want to fetch, the use 'useContext()' 

function UseContextHook() {

  const [username, setUsername] = useState("");

  return (
    <div className='start-div'>
        <h1 className='h1-style '>UseContext (important)</h1>

        {/* always write the 'children page' to render this present page by using <AppContext.provider> component*/}
        {/* Remember to assign the value which u given above in useState i.e: value={{username, setUsername}} */}
        <AppContext.Provider value={{username, setUsername}}>
            <Login />
            <User />
        </AppContext.Provider>
    </div>
  )
}

export default UseContextHook