import React, { useState } from 'react'
import Nav from './components/Nav'
import ViewSide from './components/viewSide/viewSide'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getData } from 'ajv/dist/compile/validate'

function EmployeeHomePage() {

  const { username } = useParams();
  console.log(username);

  useEffect(()=>{
    getData();
  },[])

  return (
    <>
    <div className={`w-screen flex relative `}>
      <Nav/> 
<<<<<<< HEAD
   
      <ViewSide username = {username}/> 

=======
      <ViewSide/> 
>>>>>>> 6b2e1dd700d576153a6bd3412ed8ab7991367c82
   </div>
    </>
    
  )
}

export default EmployeeHomePage
