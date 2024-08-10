import React from 'react'
import DetailsCard from './components/DetailsCard'

function Details() {
  var temp = [[21,"Sick Leave","E7FBE6"],[21,"Sick Leave","D1E9F6"],[21,"Sick Leave","eed2ec"],[21,"Sick Leave","FFE0B5"]]
  return (
    <>
    <div className='flex  w-[98%] mt-5  bg-slate-100 rounded-lg flex-col p-4 '>
     <h1 className='text-xl font-semibold mb-1'> Leave Details</h1>
    <div className='flex justify-between h-[13vh] w-[100%]  p-1 lg:flex-row md::flex-row sm:flex-col '>
      {temp.map((val)=><DetailsCard val={val[0]} reason={val[1]} color={val[2]} />)}
    </div>
   </div>
    </>
  )
}

export default Details
