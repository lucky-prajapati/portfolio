import React from 'react'

import pic from "../../public/photo.avif"

import { FaSquareFacebook } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa6'
import { IoLogoYoutube } from 'react-icons/io5'
import { FaTelegram } from 'react-icons/fa6'

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/2 mt-12 md:mt-24 space-y-2'>
                <span>Welcome In My Feed</span>
                <div className='flex space-x-1 text-2xl md:text-4xl '>
                    <h1>Hello, I'm a</h1>
                    {/* <span className='text-red-700 font-bold'>Developer</span> */}
                            <ReactTyped
                            className='text-red-700 font-bold'
                            strings={["Developer","Programmer","Coder"]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop={true}
                        />
                </div>
                <br />
                <p className='text-sm md:text-md text-justify'>
                     My name is santosh kumar, I am basically from bihar but currently staying in Dhankaur,
                    I did my graduation in computer application from MMHAPU patna bihar. currently I am pursuing
                    MCA from galgotias university utter Pradesh. my strengths are i am a self motivated, 
                    hard working and a disciplined person. My short term goal is to get a job in the capacity of
                    a fullstack web developer in a reputed organization and my long term goal is to achive a good
                    position from where I can build my career and help the organization too. My hobbies are listening
                    to music, cooking and reading books. That's all about me. Thanks again for this opportunity.    
                </p>
                <br />
                {/* Social media icons */}
                <div className='flex justify-between'>
                    <div className='space-y-2'>
                        <h1 className='font-bold'>Available on</h1>
                        <ul className='flex space-x-5'>
                            <li><FaSquareFacebook className='text-2xl cursor-pointer' /></li>
                            <li><FaLinkedin className='text-2xl cursor-pointer' /></li>
                            <li><IoLogoYoutube className='text-2xl cursor-pointer' /></li>
                            <li><FaTelegram className='text-2xl cursor-pointer' /></li>
                        </ul>
                    </div>
                    <div className='space-y-2'>
                        <h1 className='font-bold'>Currently Working on</h1>
                        <div className='flex space-x-5'>
                            <SiMongodb className='text-xl md:text-3xl hover-scale-110 rounded-full border-[2px]' />
                            <SiExpress className='text-xl md:text-3xl hover-scale-110 rounded-full border-[2px]' />
                            <FaReact className='text-xl md:text-3xl hover-scale-110 rounded-full border-[2px]' />
                            <FaNodeJs className='text-xl md:text-3xl hover-scale-110 rounded-full border-[2px]' /> 
                        </div>    
                    </div>  
                </div>
            </div>
        <div className='md:w-1/2 ml-72 mt-20'>
            <img src={pic} className='rounded-full w-[550px] h-[550px]' alt="" />
        </div>
        </div>
    </div>
    </>
  )
}

export default Home