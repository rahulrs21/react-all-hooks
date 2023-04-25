import React from 'react'

function BoxInfo({name, email, body}) {
  return (
    <div className='p-3 rounded my-2 mx-2 bg-slate-400'>
        <div className=''>
            <div className='flex flex-col justify-center items-center'>
                <p><span className='font-bold'>Name:</span> {name.length>10 ? name.slice(0,11) : name}</p>
                <p><span className='font-bold'>Email:</span> {email}</p>
                <p><span className='font-bold'>Body:</span> {body.length>80 ? body.slice(0, 81)+`...` : body}</p>
            </div>
        </div>
    </div>
  )
}

export default BoxInfo