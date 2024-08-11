import React, { useState } from 'react';
import Details from './Details';
import Table from './Table';
import Title from './Title';
import PopUp from './components/PopUp';


const ViewSide=(props)=> {
 
  const [isOpen, setIsOpen] = useState(false)

   const toggle = ()=>{
    setIsOpen(!isOpen)
   }

  return (
    <div className='h-screen w-[85%] bg-[#FFFFFD] flex  flex-col  justify-center items-center'>
      <Title username = {props.username}/>
     <Details username = {props.username}/>
     <div className='flex justify-end w-[90%] mt-2 '>
        <button onClick={toggle} className='bg-black text-white py-[1vh] px-6 rounded-lg shadow-md shadow-slate-200 hover:bg-slate-600'>
          open
        </button>
      </div>
      <Table/>
      {isOpen&&
      <PopUp toggle={toggle}/>
    }
    </div>
  )
}

export default ViewSide
