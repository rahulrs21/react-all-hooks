import axios from 'axios'
import React, { useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState } from 'react'

function Practice() {

  const [data, setData] = useState("");
  const [toggle, setToggle] = useState(false);



  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments")
    .then((response) => {
      setData(response.data)
    })
  }, [])

  function getLargestName(names) {
    if(!names) return null;
    let largestName = "";

    for(let i=0; i<names.length; i++) {
      let currentName = names[i].name;
      if(currentName.length > largestName.length) {
        largestName = currentName;
      }
    }
    console.log("MEMO IS RUNNING")

    return largestName;
  }
  
  const getLongestName = useMemo(() => getLargestName(data), [data]);

  return (
    <div className='start-div'>
        <h1 className='h1-style'>Practice</h1>

        <p>{getLongestName}</p>
        <p>Hi</p>

        <button 
            className='button-style w-40 m-auto my-4'
            onClick={() => {
                setToggle(!toggle);
            }}
        >
            Toggle
        </button>

        {toggle && <h2 className='text-lg font-medium'>You Pressed Toggle</h2>}

        
    </div>
  )
}

export default Practice