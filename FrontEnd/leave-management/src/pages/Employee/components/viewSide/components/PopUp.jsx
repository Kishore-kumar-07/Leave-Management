import React from 'react'

const PopUp = ({toggle}) => {
  return (
    <div className='h-screen w-screen  bg-black bg-opacity-15 absolute inset-0 m-auto flex items-center justify-center'>
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
    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
    </div>

    <div class="mb-4 w-[70%]">
   <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
    from
    </label>
    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="from" type="date" placeholder="From Date" />
    </div>
    <div class="mb-4 w-[70%]">
      
   <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
    To
    </label>
    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="to" type="date" placeholder="To Date" />
    </div>

    <div class="mb-4 w-[70%]">
   <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      Reason
    </label>
    <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="reason" type="text" placeholder="Enter the reason" />
    </div>

    <div class="mb-4 w-[70%]">
   <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
       Number of Days
    </label>
    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="days" type="Number" placeholder="Username" />
    </div>
    <button className='bg-blue-500 py-3 px-5 rounded-lg shadow-sm shadow-black '>
      Submit
    </button>
      </div>
      </div>

      
    </div>
  )
}

export default PopUp
