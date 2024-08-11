import React, { useState } from 'react'
import Nav from './components/Nav'
import ViewSide from './components/viewSide/viewSide'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getData } from 'ajv/dist/compile/validate'
import axios from 'axios'

function EmployeeHomePage() {

  const { username } = useParams();
  console.log(username);

  useEffect(()=>{
    getData();
  },[])

  const getData = async() =>{
    const data = await axios.post('http://localhost:5000/leave/getLeaveByUser',
      {
        username
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(data.data);

  }

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
