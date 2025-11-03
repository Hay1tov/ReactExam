import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='w-full bg-sky-400 fixed top-0 left-0 z-50 shadow-md'>
      <nav className='max-w-[800px] mx-auto h-[60px] flex justify-center items-center'>
        <div className='text-[18px] font-bold flex gap-8 text-white'>
          <NavLink to='/' className='hover:text-gray-200 transition'>Home</NavLink>
          <NavLink to='/products' className='hover:text-gray-200 transition'>Products</NavLink>
          <NavLink to='/users' className='hover:text-gray-200 transition'>Users</NavLink>
          <NavLink to='/todo' className='hover:text-gray-200 transition'>ToDoList</NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header
