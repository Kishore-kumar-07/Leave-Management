import React, { useState, useEffect } from 'react';
import Details from './Details';
import Table from './Table';
import Title from './Title';
import PopUp from './components/PopUp';
import axios from 'axios';

const ViewSide=(props)=> {
 
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState([])

  useEffect(()=>{
    getData();
  },[])

  const getData = async() =>{
    const data = await axios.post('http://localhost:5000/leave/getLeaveByUser',
      {
        username: props.username,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(data.data.data);
    setData(data.data.data);
  }

  const toggle = ()=>{
    setIsOpen(!isOpen)
  }

  return (
    <div className='h-full w-screen bg-[#FFFFFD] flex  flex-col  justify-center items-center'>
      <Title username = {props.username} />
      <Details username = {props.username}/>
      <div className='flex justify-end w-[90%] mt-2 '>
        <button onClick={toggle} className='bg-black text-white py-[1vh] px-6 rounded-lg shadow-md shadow-slate-200 hover:bg-slate-600'>
          + Leave
        </button>
      </div>
      <Table data = {data}/>
      {isOpen&&
      <PopUp toggle={toggle}/>
    }
    </div>
  )
}

export default ViewSide