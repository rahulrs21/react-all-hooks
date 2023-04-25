//  In ImperativeHanlde, There is 2 pages, This is Parent. Child is written in 'plugin>Button.js', 
// Here we are fetching function from Child to Parent

import React, { useRef, useState } from 'react'
import Button from './plugin/Button';

function ImperativeHandle() {
    const [toggle, setToggle] = useState(false);
    const handleRadio = () => {
        setToggle(!toggle)
    }

    // ImperativeHandle operation starts here
    const buttonRef = useRef(null);


  return (
    <div className={!toggle ? `flex flex-col max-w-7xl text-black relative justify-center items-center mx-auto text-center my-12 space-y-2` : `flex flex-col relative bg-black text-white max-w-7xl justify-center items-center mx-auto text-center my-12 pb-10 rounded-lg space-y-2`}>

        <h1 className='text-3xl font-semibold underline my-5'>ImperativeHandle</h1>
        <p className='py-3 font-medium'>In ImperativeHanlde, There is 2 pages, This is Parent. Child is written in 'plugin-Button.js' <br/>
        Here we are fetching function from Child to Parent by using useRef</p>

        {/* Toggle Button for Dark Mode(just for understand) */}
        <label className="absolute top-2 right-2 cursor-pointer flex mx-2">
            <input type="checkbox" onClick={handleRadio} value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className={toggle ? `ml-3 text-sm font-medium text-white dark:text-gray-300`:`ml-3 text-sm font-medium dark:text-gray-300 text-black`}>{toggle ? `Dark mode`: `Light Mode`}</span>
        </label>

        {/* ImperativeHandle operation starts here */}
        <button className='bg-blue-400 p-2 rounded' onClick={() => buttonRef.current.alterButton()}>Button from Parent</button>
        <Button ref={buttonRef} />
    </div>
  )
}

export default ImperativeHandle
