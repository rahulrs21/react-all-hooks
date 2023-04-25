// // // You need to put checkbox into this array. Note when you click to any array item 'delete' button should appear near to that item
// // import React, { useRef, useState } from "react";

// // function ReactTask1() {
// //   const arr = ["Apple", "Orange", "Grapes", "Banana", "Cherry"];

// //   const [check, setCheck] = useState(false);


// //   const inputRef = useRef(null)


// //   const [text, setText] = useState('Click Me')

// //   const handleCheck = () => {
// //     // key && setCheck(!check);
// //     setCheck(!check);
// //     console.log("Value - ",inputRef.current.value)
// //   };

// //   return (
// //     <div className="start-div">
// //       <ul className="flex justify-center space-x-5">
// //         {arr.map((item, i) => (
// //           <li  ref={inputRef}  key={i} >
// //             <input type="checkbox" onClick={handleCheck}   />
// //             <p>{item}</p>
            
// //             {i==1 && check && <button className="button-style">Delete</button>}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// // export default ReactTask1;


// import React, { useReducer, useRef, useState } from 'react'

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'ON':
//       return {count: state.count + 1, showText: state.showText}
//       break;
//     case 'OFF': 
//       return {count: state.count + 1, showText: !state.showText}
  
//     default: return state;
//   }
// }

// function ReactTask1() {
//   const arr = ["Apple", "Orange", "Grapes", "Banana", "Cherry"];

//   const [click, setClick] = useState(false)
//   const [button, setButton] = useState(false)

//   const [state, dispatch] = useReducer(reducer, {count: 0, showText: true})

//   const inputRef = useRef(null);
  
//   let count = 0

//   const handleCheck = (item) => {
    

//     if(count % 2 == 0) {
//       console.log(`You selected ${item} and ${count}`)
//     } else {
//       console.log(`You DE-Selected ${item} and ${count}`)
//     }
//     count++;
//     // arr.filter([...arr], !item);

//     // item && setClick(!click)

//   }

//   return (
//     <div className='start-div'>

//         <h1>Use Reducer Practice</h1>

//         <div className=''>
//         <ul className='flex justify-evenly my-4'>
//           {
//             arr.map((item, i) => (
//               <li key={i}>

//                 <p>ID : {i}</p>

//                 <input type="checkbox"onClick={() => {handleCheck(item) }} />

//                 <p ref={inputRef}>{item}</p> 

//                 {click && <button className='button-style' >Delete</button>}

//               </li>
//             ))
//           }
//         </ul>
//         </div>

        


//         {/* <input type="checkbox" onChange={handleCheck} /> */}



        
//         <button
//           className='button-style w-30'
//           onClick={() => {
//             dispatch({
//               type: "ON",
//               type: "OFF"
//             })
//           }}
//         >
//           click me
//         </button>

//         {state.showText && <p>{state.count} is EVEN</p>}
//         {!state.showText && <p>{state.count} is ODD</p>}

//     </div>
//   )
// }

// export default ReactTask1



import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BoxInfo from './plugin/BoxInfo';

function ReactTask1() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/comments/");
    setData(data)
    console.log(data)
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className='start-div'>
      <h1 className='h1-style'>ReactTask1</h1>

        <div className='grid grid-cols-3 grid-flow-row'>
          {data && data.slice(0,12).map((item) => (
            // <p key={i}>{item.name}</p>

            <BoxInfo
              key={item.id}
              name={item.name}
              email={item.email}
              body={item.body}
            />
          ))}
        </div>

    </div>
  )
}

export default ReactTask1