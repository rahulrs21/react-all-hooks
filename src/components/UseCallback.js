// Same as UseMemo but here we needed to return or to 'access a function'. where UseMemo is wanted to 'access the value'

import React, { useCallback, useState } from 'react'
import ChildUseCallback from './plugin/ChildUseCallback'

function UseCallback() {
    const [toggle, setToggle] = useState(false)
    const [data, setData] = useState("Yo! Please subscribe to my channel")

    // useCallback = To avoid function to be called over and over again 
    const returnComment = useCallback((name) => {
        return data + name;
    }, [data]);

    const handleToggle = () => {
      setToggle(!toggle)
    }

  return (
    <div className='start-div'>
        <h1 className='h1-style mb-3'>UseCallback</h1>
        <p>Same as UseMemo but here we needed to return or to 'access a function'. where UseMemo is wanted to 'access the value'</p>
        
        <ChildUseCallback parentFunction={returnComment} />  
        {/* ChildUseCallback defined in plugin folder */}

        <button className='button-style w-40 m-auto my-4' onClick={handleToggle}>Toggle</button>

        {toggle && <p>toggle</p> }
    </div>

  )
}

export default UseCallback