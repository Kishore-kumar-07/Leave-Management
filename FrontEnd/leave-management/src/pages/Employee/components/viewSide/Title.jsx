import React from 'react'

function Title(props) {
  return (
  <>
  <div className=' w-full flex justify-center mt-1  '>
  <div className="w-[98%] bg-slate-100 rounded-lg  flex  py-5 justify-center items-center">
    <div className='flex w-[90%] justify-between'>
    <h1 className='text-xl font-semibold'>
        Employee Dashboard
      </h1>
    <h1 className='text-xl font-semibold'>
        {props.username}
    </h1>
    </div>

     
    </div>
  </div>
  </>
  )
}

export default Title
