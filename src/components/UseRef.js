import React, { useRef, useState } from 'react'

function UseRef() {
  const arrName = [];

  const inputRef = useRef(null);

  const [text, setText] = useState('RAHUL');
  const [data, setData] = useState('');

  const [count, setCount] = useState(0);

  const arrayFetch = () => {
    const nameList = arrName.map((name) => 
        <ul key={name.id}>
            <div className='flex justify-center items-center'>
                {/* <p>count: {count}</p> */}
                <p className='mx-5 text-left'>{name}</p> 
                <button onClick={deleteName} value={count} className='bg-blue-400 p-2 rounded text-right' >Delete Name</button>
            </div>
        </ul>
    )

    // Concatenate the new list with any existing list items in the data state variable
    const newData = data ? [...data, ...nameList] : nameList

    setData(newData)
  }
  

  const handleClick = () => {
    if(inputRef.current.value === "") {
        alert("please enter name")
        return;
    }
    // console.log(inputRef.current.value)    // we need to get the 'current value' in 'input text'. so thats y always use '.current.value'
    setText(inputRef.current.value)

    setCount(count+1)

    arrName.push(inputRef.current.value)

    arrayFetch();

    inputRef.current.value = "";
  }


  const deleteName = (e) => {
    
    let dataFetch = e.target.value;
    const newArray = arrName.splice(dataFetch, 1);

    // Concatenate the new list with any existing list items in the data state variable
    const newData = data ? [...data, ...newArray] : newArray

    // console.log(newData)
    if(dataFetch == 0) {
        setData(null);
    } else {

        setData(newData);
    }
  }

  return (
    <div className='flex flex-col max-w-7xl justify-center items-center mx-auto text-center my-12 space-y-5'>
        <h1 className='text-3xl font-semibold underline my-5'>USE REF</h1>
        <div className='flex items-center justify-center'>
            <p className='text-xl'>Name: </p>
            <h1 className='text-xl font-semibold px-2'>{text}</h1>
        </div>
        <div className='flex w-full justify-center'>
            <input ref={inputRef} className='px-2 border w-1/3 border-blue-300 focus:outline-blue-500' placeholder='Enter your name' type="text"  />
            {inputRef && <button className={`bg-blue-400 p-2 rounded`} onClick={handleClick}>Change Name</button>}
        </div>

        {/* adding Delete operation */}
        <div className='flex flex-col w-full justify-center items-center space-y-2'>
            {data}
        </div>
        
    </div>
  )
}

export default UseRef
