import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BoxModel from './plugin/BoxModel';

function ReactTask2() {

  const [data, setData] = useState([]);

  const fetchAPIdata = async () => {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/comments/");
    setData(data)
  }
  
  useEffect(() => {
    fetchAPIdata();
  }, [])

  return (
    <div className='start-div'>
        <h1 className='h1-style'>ReactTask2</h1>
        
        <div className='grid grid-cols-3 grid-flow-row'>
            {
                data && data.slice(0,12).map((item, i) => (
                    // <p key={i}>{item.name}</p>

                    <BoxModel 
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        email={item.email}
                        body={item.body}
                    />
                ))
            }
        </div>

    </div>
  )
}

export default ReactTask2