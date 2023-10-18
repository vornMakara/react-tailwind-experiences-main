import React from 'react'
import Navbar from '../components/Navbar.jsx'

const Hero = () => {
    return (
        <div className='h-screen w-full relative'>
            <Navbar />
            <img
                className='top-0 left-0 w-full h-screen object-cover brightness-75'
                src='https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg'
                alt='/'
            />
            <div className='w-full h-full absolute left-0 top-0 flex flex-col justify-center px-3'>
                <div className='w-full'>
                    <div className='text-white max-w-[1400px] m-auto'>
                        <p className='font-bold'>All Inclusive</p>
                        <p className='text-4xl md:text-7xl font-bold pb-3'>Private Beaches & Getaways</p>
                        <p className='text-lg md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Quo ut quis est, id consequuntur sequi ipsum vitae sit non exercitationem.</p>
                        <button className='bg-white mt-5 text-[#000] text-lg'>Reserve Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero