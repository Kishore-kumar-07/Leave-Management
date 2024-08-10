import React from 'react'

function DetailsCard(props) {
  return (
    <div className={` w-[22%] h-[100%] rounded flex justify-around items-center bg-[#${props.color}] `}>
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
