import React, { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

const PopUp = ({toggle}) => {
  const [userName, setUserName] = useState("");
  const [reason, setReason] = useState("");
  const [leaveType, setLeaveType] = useState("");
  const[noOfDays,setNoOfDays] = useState(0)
  const today = new Date().toISOString().split("T")[0]; // Today's date in YYYY-MM-DD format
  const [fromDate, setFromDate] = useState(today);
  const [toDate, setToDate] = useState(today);


  const handleToDateChange = (e) => {
    const newToDate = e.target.value;
    setToDate(newToDate);
    calculateTotalDays(fromDate, newToDate);
  };

  const handleFromDateChange = (e) => {
    const newFromDate = e.target.value;
    setFromDate(newFromDate);

    if (new Date(newFromDate) > new Date(toDate)) {
      setToDate(newFromDate);
      setNoOfDays(0);
    } else {
      calculateTotalDays(newFromDate, toDate);
    }
  };

  const calculateTotalDays = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diffTime = endDate - startDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setNoOfDays(diffDays);
    // setFromDate(formatDisplayDate(fromDate));
    // setToDate(formatDisplayDate(toDate));
  };

  const formatDisplayDate = (date) => {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  };


const applyLeave = async()=>{
  if(userName==="" || reason==="" || fromDate === "" || toDate === "" || leaveType === ""){
    toast.warn("Enter All Fields")
  }
 
 else{ 
  if(fromDate === toDate){
    setNoOfDays(1)
  }
  try {
    var res = await axios.post("http://localhost:5000/leave/apply",{
      username:userName,
      empType:"type-I",
      leaveType:leaveType,
      from:formatDisplayDate(fromDate),
      to:formatDisplayDate(toDate),
      numberOfDays:noOfDays,
      reason:reason
  
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )

  if(res.status === 201){
    toast.success("Leave Applied Successfully")
    toggle()
  }else{
    toast.error("Leave Not Apllicable")
    toggle()
  }
  } catch (error) {
    toast.error(error)
  }}
console.log("done")
}
  return (
    <div className='h-[100%] w-[100%]  bg-black bg-opacity-15 absolute inset-0 m-auto flex items-center justify-center'>
    <div className=' w-[50%] bg-white rounded-lg pb-5'>

      <div className='w-[100%] flex justify-between p-4'>
        <h1 className='font-semibold text-2xl'>Leave Details</h1>
        <button onClick={toggle}  className='text-2xl text-red-500 '>x</button>
      </div>


      <div  className='w-[100%] flex flex-col justify-center items-center '>

      <div class="mb-4 w-[70%]">
   <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
    Username
    </label>
    <input onChange={(val)=>setUserName(val.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
    </div>

    
    <div class="mb-4 w-[70%]">
   <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
    Leave Type
    </label>
    <input onChange={(val)=>setLeaveType(val.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
    </div>



    <div class="mb-4 w-[70%]">
   <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
    from
    </label>
<input 
          type="date"
          className="border rounded-lg p-2 w-full"
          value={fromDate}
          onChange={handleFromDateChange}
          min={today}
        />    </div>
    <div class="mb-4 w-[70%]">
      
   <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
    To
    </label>
    <input
          type="date"
          className="border rounded-lg p-2 w-full"
          value={toDate}
          onChange={handleToDateChange}
          min={fromDate}
        />
            </div>

    <div class="mb-4 w-[70%]">
   <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      Reason
    </label>
    <textarea onChange={(val)=>setReason(val.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="reason" type="text" placeholder="Enter the reason" />
    </div>
    <div className='flex flex-col'>
      <h1>
      {formatDisplayDate(fromDate)}
      </h1>
      <h1>
      {formatDisplayDate(toDate)}
      </h1> 
      <h1>
      {noOfDays}
      </h1>
    
     
      </div>
  
    <button onClick={applyLeave} className='bg-blue-500 py-3 px-5 rounded-lg shadow-sm shadow-black '>
      Submit
    </button>
      </div>
      </div>

      
    </div>
  )
}

export default PopUp
