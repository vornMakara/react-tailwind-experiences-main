import React, { useState } from 'react'

import {HiOutlineMenuAlt3} from 'react-icons/hi';

const Navbar = () => {
  const [showMenu,setShowMenu] = useState(false)

  return (
    <div className='absolute top-0 left-0 w-full flex z-10 text-white justify-between p-4 items-center cursor-pointer'>
      <h3 className='md:text-2xl font-bold text-lg z-10'>Experiences</h3>
      <div onClick={()=> setShowMenu(!showMenu)} className='z-10 cursor-pointer'><HiOutlineMenuAlt3 size={20}/></div>
      <div className={showMenu ? 'absolute left-0  top-0 w-full h-screen bg-black/90 flex justify-center items-center cursor-pointer ease-in duration-300' : 'absolute top-0 w-full h-screen bg-black/90 flex justify-center items-center cursor-pointer left-[-100%] ease-in duration-300'}>
        <ul className='text-center'>
          <li className='text-lg md:text-3xl text-white cursor-pointer mb-14 font-bold'>Home</li>
          <li className='text-lg md:text-3xl text-white cursor-pointer mb-14 font-bold'>Destinations</li>
          <li className='text-lg md:text-3xl text-white cursor-pointer mb-14 font-bold'>Reservations</li>
          <li className='text-lg md:text-3xl text-white cursor-pointer mb-14 font-bold'>Amenities</li>
          <li className='text-lg md:text-3xl text-white cursor-pointer mb-14 font-bold'>Rooms</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar