import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* -------- Left Side --------*/}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Prescripto helps you book doctor appointments with ease. Connect with certified healthcare professionals, track your consultations, and manage prescriptions — all in one place. Your health, our priority.</p>
            </div>
            
            {/* -------- Center Side --------*/}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col text-gray-600 gap-2'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            {/* -------- Right Side --------*/}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col text-gray-600 gap-2'>
                    <li>011 4278 6390</li>
                    <li>precripto@gmail.com</li>
                </ul>
            </div>
        </div>
        
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright © 2025 Prescripto - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer