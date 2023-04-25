import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'

function UseMemo() {
  const [data, setData] = useState("");

  const [toggle, setToggle] = useState(false);

  useEffect(()=> {
    axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
            setData(response.data);
        })
  },[])


//   Finding the longest name in the API
  const findLongestName = (comments) => {
    if(!comments) return null;

    let longestName = "";
    for(let i=0; i<comments.length; i++) {
        let currentName = comments[i].name;
        if(currentName.length > longestName.length) {
            longestName = currentName;
        }
    }

    console.log("This was computed") // This calling will be avoided when u use useMemo

    return longestName;
  }


//   USEMEMO : It is used to avoid un-necessary calls or values in console.log or in memory. same as UseEffect
const getLongestName = useMemo(() => findLongestName(data), [data]);
            // syntax: useMemo(callback function, array dependencies[same dependecy as u defined in useEffect])


  return (
    <div className='start-div'>
        <h1 className='h1-style'>UseMemo</h1>
        <p>It is used to avoid un-necessary calls in console.log or in memory when state changes(toggle button pressed). same as UseEffect</p>
        
        <h4 className='text-lg mt-5'><b>Longest name in API : </b>{getLongestName}</h4>

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

export default UseMemo

