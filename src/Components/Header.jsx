import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { TiShoppingCart } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <header className='w-full bg-sky-400 fixed top-0 left-0 z-50 shadow-md'>
      <nav className='max-w-[1350px] mx-auto h-[60px] flex justify-between items-center px-4'>
        {/* Chap logo */}
        <div>
          <h1 className='text-3xl font-[cursive] text-white'>ReactExam</h1>
        </div>

        {/* O‘rta menu */}
        <div className='text-[18px] font-bold flex gap-8 text-white'>
          <NavLink to='/' className='hover:text-gray-200 transition'>Home</NavLink>
          <NavLink to='/products' className='hover:text-gray-200 transition'>Products</NavLink>
          <NavLink to='/users' className='hover:text-gray-200 transition'>Users</NavLink>
          <NavLink to='/todo' className='hover:text-gray-200 transition'>ToDoList</NavLink>
        </div>

        {/* O‘ng tomon ikonlar */}
        <div className='flex gap-5 items-center'>
          {/* 🛒 Shopping cart */}
          <Link to='/shopping'>
            <TiShoppingCart className='text-white text-[22px] cursor-pointer hover:text-gray-200 transition' />
          </Link>

          {/* 👤 Profil */}
          <CgProfile className='text-white text-[20px] cursor-pointer hover:text-gray-200 transition'/>
        </div>
      </nav>
    </header>
  )
}

export default Header
