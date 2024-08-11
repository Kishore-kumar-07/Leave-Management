import React from 'react'

function DetailsCard(props) {
  return (
    <div className={` h-[100%] p-8 rounded flex justify-around items-center bg-[#${props.color}] 2xl:flex-row  2xl:w-[22%]  xl:flex-row xl:w-[22%] lg:flex-row lg:w-[22%] sm:flex-col sm:w-[100%] md:flex-col md:w-[100%]`}>
      <h1 className='h-[100%] flex items-center text-2xl font-bold  '>
      {props.val}
      </h1>
      <h1 className='font-semibold text-xl'>
      {props.reason}
      </h1>
    </div>
  )
}

export default DetailsCard
