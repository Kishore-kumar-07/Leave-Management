import React from 'react'
import AddSide from './components/addSide'
import ViewSide from './components/viewSide'

function EmployeeHomePage() {
  return (
    <>
    <div className='bg-[#f6f7f8] h-screen w-screen flex'>
      <AddSide/> 
      <ViewSide/> 
   </div>
    </>
    
  )
}

export default EmployeeHomePage
