import React, { useState } from 'react'
import pic from "../../public/photo.avif"
import { AiOutlineMenu } from 'react-icons/ai'
import { IoCloseSharp } from 'react-icons/io5'

function Navbar() {
    const [menu,setMenu]=useState(false)
    const navItems=[
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"Portfolio"
        },
        {
            id:3,
            text:"Experiance"
        },
        {
            id:4,
            text:"Contacts"
        },
       
    ]
  return (
    <>
    <div className='w-full container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 '>
        <div className='flex justify-between items-center h-16'>
            <div className='flex space-x-2'>
                <img src={pic} className='h-12 w-12 rounded-full' alt="" />
                <h1 className='font-semibold text-xl cursor-pointer'>
                    Santos<span className='text-green-500 text-2xl'>h</span>
                <p className='text-sm'>Web Developer</p>
                </h1>
            </div>
            {/* Dexktop navbar */}
            <div>
                <ul className='hidden md:flex space-x-8'>
                    {
                        navItems.map(({id,text})=>(
                            <li className='hover:scale-105 duration-200 font-semibold cursor-pointer' key={id}>{text}</li>
                        ))
                    }
                </ul>
                <div onClick={()=>setMenu(!menu)} className='md:hidden'>
                    {menu?<AiOutlineMenu size={24} />:<IoCloseSharp size={24} />} </div>
            </div>
        </div>
        {/* Mobile navbar */}
        {
            menu &&(
                <div>
                    <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl'>
                        {
                            navItems.map(({id,text})=>(
                                <li className='hover:scale-105 duration-200 font-semibold cursor-pointer' key={id}>{text}</li>
                            ))
                        }
                    </ul>
                </div>
            )
        }
        
    </div>
    </>
  )
}

export default Navbar