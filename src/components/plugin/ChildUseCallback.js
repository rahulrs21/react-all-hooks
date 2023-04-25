// useCallback Hook
import React, { useEffect } from 'react'

const ChildUseCallback = ({parentFunction}) => {

    useEffect(() => {
        console.log("USECALLBACK FUNCTION WAS CALLED");
    }, [parentFunction]);

  return (
    <div>
        <b>{parentFunction("-Rahul")}</b>
    </div>
  )
}

export default ChildUseCallback

