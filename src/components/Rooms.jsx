import React from 'react'

const Rooms = () => {
    return (
        <div className='max-w-[1400px] m-auto bg-blue-100 grid grid-cols-1 md:grid-cols-3 gap-4 p-4 my-5 md:my-20'>
            <div className='col-span-1 flex flex-col justify-center'>
                <h2 className='text-2xl font-bold mb-4'>Fine Interior Rooms</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ipsam rerum iusto excepturi similique minus?
                </p>
            </div>
            <div className='col-span-2 grid grid-cols-2 gap-4 max-h-[60vh] md:max-h-[80vh] pt-0 md:pt-10'>
                <img
                    className='object-cover w-full h-full'
                    src='https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
                    alt='/'
                />
                <img
                    className='row-span-2 object-cover w-full h-full'
                    src='https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
                    alt='/'
                />
                <img
                    className='object-cover w-full h-full'
                    src='https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
                    alt='/'
                />
            </div>
        </div>
    )
}

export default Rooms