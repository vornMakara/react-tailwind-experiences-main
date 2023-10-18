import React from 'react'

const Plan = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[1400px] m-auto px-3'>
            <div className='grid grid-cols-2 grid-rows-6 gap-4 h-[60vh] md:h-[80vh]'>
                <img
                    className='w-full object-cover h-full row-span-3'
                    src='https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1368&q=80'
                    alt='/'
                />
                <img
                    className='w-full object-cover h-full row-span-2'
                    src='https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
                    alt='/'
                />
                <img
                    className='w-full object-cover h-full row-span-2'
                    src='https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80'
                    alt='/'
                />
                <img
                    className='w-full object-cover h-full row-span-3'
                    src='https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='/'
                />
                <img
                    className='w-full object-cover h-full row-span-2'
                    src='https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1673&q=80'
                    alt='/'
                />

            </div>
            <div className='flex flex-col justify-center'>
                <h2 className='md:text-6xl font-bold text-2xl'>Plan Your Next Trip</h2>
                <p className='md:text-2xl text-lg py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, nam?</p>
                <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptates nostrum dolorum reprehenderit error! Doloribus est illo eius saepe? Molestias sapiente perspiciatis doloribus consectetur nihil facilis aliquid eaque vel quisquam.</p>
                <div className='py-4'>
                    <button className='border-2 border-cyan-700 hover:shadow-xl'>Learn MoreBook</button>
                    <button className='border-2 border-cyan-700 bg-black text-white hover:shadow-xl ml-3'>Your Trip</button>
                </div>
            </div>
        </div>
    )
}

export default Plan