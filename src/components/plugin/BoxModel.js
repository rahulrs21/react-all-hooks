import axios from 'axios';
import React, { useRef, useState } from 'react'

function BoxModel({id, name, email, body}) {
    const [button, setButton] = useState(false)

    // const handleButton = () => {
    //     setButton(!button);
    //     console.log("NNN")
    // }


    const handleClick = async () => {
        
      // alert(id)
      // alert(name)

      let {data} = await axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`)
      console.log("selected Data = ",data.name)

    }
    
    let count = 0;

  return (
        <div className='flex flex-col justify-center items-center p-3 bg-blue-300 mx-2 my-2 rounded space-y-3 transition-all hover:bg-gray-200 hover:opacity-90 cursor-pointer'
          onMouseEnter={() => setButton(true)}
          onMouseLeave={() => setButton(false)}
          
        >
            <p className='hidden'>{id}</p>
            <p className='font-semibold'>{name.toUpperCase()}</p>
            <p id="email" className='italic'>{email}</p>
            <p>{body.length > 80 ? body.slice(0,80) : body}</p>

            {button && <button 
                // onMouseEnter={() => setButton(!button)}
                // onMouseLeave={() => setButton(!button)}
                className='button-style z-10'
                onClick={handleClick}
            >
                Get ID
            </button>}

            

        </div>
  )
}

export default BoxModel

