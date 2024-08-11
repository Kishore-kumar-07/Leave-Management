import React, { useState } from 'react'
import Nav from './components/Nav'
import ViewSide from './components/viewSide/viewSide'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getData } from 'ajv/dist/compile/validate'

function EmployeeHomePage() {

  const { username } = useParams();
  console.log(username);

  return (
    <>
    <div className={`w-screen flex relative `}>
      <Nav/> 
   
      <ViewSide username = {username}/> 

   </div>
    </>
    
  )
}

export default EmployeeHomePage
