import React from 'react'
import { Link } from 'react-router-dom'

function Nav(props) {
  return (
    <nav className="w-64 h-screen bg-gray-800 text-white">
    <div className="p-4">
      <h1 className="text-xl font-semibold">BreakBuddy</h1>
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
