// This is for knowledge purpose
// https://stackoverflow.com/questions/65080448/how-to-display-all-items-from-an-api-in-react-js

import axios from 'axios'
import React, { useEffect, useState } from 'react'

function FetchDataAPI() {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/comments/"
        // "https://jsonplaceholder.typicode.com/todos/"
        );

        setProducts(data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

  return (
    <div className='start-div'>
        <h1 className='h1-style'>FetchDataAPI</h1>

        {/* {products.map((product) => (
            <p key={product.id}>{product.name}</p>
        ))}  */}
        <p>Just un-comment the code</p>

    </div>
  )
}

export default FetchDataAPI

