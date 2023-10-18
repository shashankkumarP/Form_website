import React from 'react'

const Navbar = () => {



  return (
    <nav className="bg-blue-500 p-4 mt-1">
      <div className="container mx-auto flex justify-between items-center">
        <a href='/'  className="text-white text-2xl font-bold">Levitation</a>
        <ul className="flex space-x-4">
          <li><a href="/showtable" className="text-white">Table</a></li>
          <li><a href="/login" className="text-white">Login</a></li>
          <li><a href="/register" className="text-white">Register</a></li>
        </ul>
      </div>
    </nav>
   
  )
}

export default Navbar
