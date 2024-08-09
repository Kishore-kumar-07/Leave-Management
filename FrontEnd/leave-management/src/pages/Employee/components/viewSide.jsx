import React from 'react'

import {Scrollbars} from 'react-custom-scrollbars'

function viewSide() {
   
  var temp = [1,2,3,4]

  var temp1 = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div className='h-screen w-[85%] bg-[#de2525] flex  flex-col  '>
        <div>
        <div className='flex flex-wrap h-[20%]'>
        {temp.map((val,index)=><div key={index} className='text-white h-48 w-72 flex justify-center items-center bg-black ml-5 my-2 p-10 rounded-md'>
            {val}
        </div>)}
     </div>
        </div>
    <Scrollbars style={{width: "99%", height: "300%" ,}}>
    <div className='h-screen overflow-y-hidden overflow-hidden w-[100%]'>
     <div className='flex flex-wrap flex-col'>
        {temp1.map((val,index)=><div key={index} className='  flex justify-center items-center bg-white ml-5 my-2 p-10 rounded-md'>
            {val}
        </div>)}
     </div>
     </div>
    </Scrollbars>
    
   
    </div>
  )
}

export default viewSide
