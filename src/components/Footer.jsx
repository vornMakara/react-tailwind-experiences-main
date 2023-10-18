import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { TiSocialPinterest } from 'react-icons/ti';

const Footer = () => {
    return (
        <div className=' bg-gray-900 text-white py-14 px-3'>
            <div className=' max-w-[1400px] m-auto grid grid-cols-2 md:grid-cols-6 border-b-2 pb-5 border-white\80'>
                <div>
                    <h6 className='font-bold uppercare pt-2'>Solutions</h6>
                    <ul>
                        <li className='py-1'>Travel</li>
                        <li className='py-1'>Booking</li>
                        <li className='py-1'>Flights</li>
                        <li className='py-1'>Cruises</li>
                        <li className='py-1'>Ground</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold uppercare pt-2'>Solutions</h6>
                    <ul>
                        <li className='py-1'>Travel</li>
                        <li className='py-1'>Booking</li>
                        <li className='py-1'>Flights</li>
                        <li className='py-1'>Cruises</li>
                        <li className='py-1'>Ground</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold uppercare pt-2'>Solutions</h6>
                    <ul>
                        <li className='py-1'>Travel</li>
                        <li className='py-1'>Booking</li>
                        <li className='py-1'>Flights</li>
                        <li className='py-1'>Cruises</li>
                        <li className='py-1'>Ground</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold uppercare pt-2'>Solutions</h6>
                    <ul>
                        <li className='py-1'>Travel</li>
                        <li className='py-1'>Booking</li>
                        <li className='py-1'>Flights</li>
                        <li className='py-1'>Cruises</li>
                        <li className='py-1'>Ground</li>
                    </ul>
                </div>
                <div className='col-span-2 py-8 md:pt-2'>
                    <p className='font-bold uppercase'>Subscribe to our newsletters</p>
                    <p className='py-4'>
                        The Latest deals, articles and resources sent to your inbox weekly.
                    </p>
                    <form className='flex flex-col sm:flex-row'>
                        <input className='w-full p-2 mr-4 rounded-md mb-4' type='email' placeholder='Enter email..' />
                        <button className='p-2 mb-4 rounded-md'>Subscribe</button>
                    </form>
                </div>
            </div>
            <div className='flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
                <p className='py-4'>2022 Experiences, LLC. All rights reserved</p>
                <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                    <TiSocialPinterest size={30} />
                </div>
            </div>
        </div>
    )
}

export default Footer