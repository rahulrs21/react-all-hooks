import React, { useEffect, useLayoutEffect, useRef } from 'react'
// UseLayoutEffect is same like UseEffect. But UseLayout loads little faster than useEffect

function UseLayoutEffect() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, [])

  useEffect(() => {
    inputRef.current.value = "HELLO";
  }, [])

  return (
    <div className='flex flex-col max-w-7xl justify-center items-center mx-auto text-center my-12 space-y-2'>
        <h1 className='text-3xl font-semibold underline my-5'>USE LAYOUT</h1>

        <input type="text" ref={inputRef} value="Rahul" className='w-2/3 border border-violet-600 focus:outline-none' />

    </div>
  )
}

export default UseLayoutEffect