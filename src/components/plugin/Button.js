// This is child page of useImperativeHandle

import React, { forwardRef, useImperativeHandle, useState } from 'react'
// In ImparativeHandle, U have to mention one function called 'forwardRef':allows us to transform and accept reference from  parent.

const Button = forwardRef((props, ref) => {
  
  const [button, setButton] = useState(false);

  useImperativeHandle(ref, () => ({
    // objects of a funtions
    alterButton() {
        setButton(!button)
    },

  }))

  return (
    <div className='flex flex-col'>
        {/* <button className='bg-blue-400 p-2 rounded my-2' >Button from Child</button> */}
        {button && <span>Parent Button Pressed which is accessed from Child</span> }
    </div>
  )
});

export default Button



