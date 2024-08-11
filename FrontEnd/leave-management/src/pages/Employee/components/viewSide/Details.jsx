import React from 'react'
import DetailsCard from './components/DetailsCard'

function Details() {
  var temp = [[21,"Sick Leave sick leave","E7FBE6"],[21,"sick leave","D1E9F6"],[21,"sick leave","eed2ec"],[21,"sick leave","FFE0B5"]]
  return (
    <>
    <div className='flex  w-[98%] mt-5  bg-slate-100 rounded-lg flex-col p-4 '>
     <h1 className='text-xl font-semibold mb-1'> Leave Details</h1>
    <div className='flex justify-around w-[100%]  p-1 2xl:flex-row xl:flex-row lg:flex-row sm:flex-col md:flex-col md:items-end'>
      {temp.map((val)=><DetailsCard val={val[0]} reason={val[1]} color={val[2]} />)}
    </div>
   </div>
    </>
  )
}

export default Details
