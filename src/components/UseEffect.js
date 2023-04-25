import React, { useEffect, useState } from 'react'

import axios from "axios"  // This is used for fetching API by its API URL

function UseEffect() {

    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
            setData(response.data[0].email);

            console.log("Use Effect Called");
        })
    }, [count])     // always specify [], otherwise useEffect will render again and again

  return (
    <div className='flex flex-col max-w-7xl justify-center items-center mx-auto text-center my-12 space-y-2'> 
        <h1 className='text-3xl font-semibold underline my-5'>USE EFFECT</h1>

        <p>{data}</p>
        <p>{count}</p>

        <button className='bg-blue-400 p-2 rounded'
            onClick={() => {
                setCount(count+1);
            }}
        > click me</button>
    </div>
  )
}

export default UseEffect