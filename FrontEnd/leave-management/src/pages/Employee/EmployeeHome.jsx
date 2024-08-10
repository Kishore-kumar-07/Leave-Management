import React, { useState } from 'react'
import Nav from './components/Nav'
import ViewSide from './components/viewSide/viewSide'

function EmployeeHomePage() {
  return (
    <>
    <div className={` h-screen w-screen flex relative`}>
      <Nav/> 
   
      <ViewSide/> 

   </div>
    </>
    
  )
}

export default EmployeeHomePage
