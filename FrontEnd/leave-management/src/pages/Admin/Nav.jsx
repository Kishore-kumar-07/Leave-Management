import React from 'react'
import { Link } from 'react-router-dom'
import { MdDashboard } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";





const Nav = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-slate-100  h-full w-[7rem] rounded-xl flex flex-col items-center gap-y-[3rem]  py-[2rem]">
        <Link to ='/Admin' className="icon-a icon-hover flex items-center justify-center flex-col gap-y-2 mt-[4rem]">
          <MdDashboard className="text-3xl text-slate-900"/>
          <p className="text-md font-semibold">Dashboard</p>
        </Link>
        <Link to="/calllog" className="icon-a icon-hover flex items-center justify-center flex-col gap-y-2">
          <FaUserAlt  className="text-3xl text-slate-900"/>
          <p className="text-md font-semibold">Profile</p>
        </Link>
      </div>
      <ul className="mt-6">
        <li className="px-4 py-2 hover:bg-gray-700">
          <Link to="/">Dashboard</Link>
        </li>
        <li className="px-4 py-2 hover:bg-gray-700">
          <Link to="/about">Profile</Link>
        </li>
        
      </ul>
    </nav>
  )
}

export default Nav