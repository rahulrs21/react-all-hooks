import React, { useReducer } from 'react'


const reducer = (state, action) =>{
    switch (action.type) {
        case "EVEN":
            return {count: state.count + 1, showText: state.showText};
        
        case "ODD": 
            return {count: state.count, showText: !state.showText};
        
        default: return state;
    }
}

function HookUseReducer() {
  const [state, dispatch] = useReducer(reducer, {count: 0, showText: true})

  return (
    <div className='flex flex-col max-w-7xl justify-center items-center mx-auto text-center my-12 space-y-2'>
        <h1 className='text-3xl font-semibold underline my-5'>USE REDUCER</h1>

        <h1 className='text-xl font-semibold'>{state.count}</h1>
        <button 
            className='bg-blue-400 p-2 rounded w-40 '
            onClick={() => {
                dispatch({type: "EVEN"});
                dispatch({type: "ODD"});
            }}
        >Click Here</button>

        {state.showText && <p className='text-md font-semibold'>{state.count} is <span className='text-blue-500'>Even Number</span></p>}
        {!state.showText && <p className='text-md font-semibold'>{state.count} is <span className='text-red-500'>Odd Number</span></p>}

    </div>
  )
}

export default HookUseReducer


// For ex: In land page, u'll see mouse down button, if u click that it'll go one section down meanwhile you'll get
//   other content like Ad's popup(subscribe now) are coming from right side of the screen, so this way useReducer hooks will manage multiple operation in one click