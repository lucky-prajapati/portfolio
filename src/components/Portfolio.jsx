import React from 'react'
import java from "../../public/java.png"
import javascript from "../../public/javascript.png"
import mongodb from "../../public/mongodb.jpg"
import node from "../../public/node.png"
import express from "../../public/express.png"
import reactjs from "../../public/reactjs.png"

function Portfolio() {
  const cardItem=[
    {
      id:1,
      logo:javascript,
      name:"javascript"
    },
    {
      id:2,
      logo:mongodb,
      name:"mongodb"
    },
    {
      id:3,
      logo:express,
      name:"express"
    },
    {
      id:4,
      logo:reactjs,
      name:"reactjs"
    },
    {
      id:5,
      logo:node,
      name:"node"
    },
  ];
  return (
    <>
    <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-10'>
      <div>
        <h1 className='text-3xl font-bold mb-5'>PortFolio</h1>
        <span className='underline font-semibold'>Featured Projects</span>
        <div className=' grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
          {
            cardItem . map(({id, logo, name}) => (
              <div className='md:w-[300px] md:h-[300px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-125 duration-300' key={id}>
                <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' alt="" />
                <div>
                  <div className='px-2 font-bold text-xl mb-2'>{name}</div>
                  <p className='px-2 text-gray-900'>Lorem ipsum, dolor sit amet ssssssssssss to ggggggggggg. </p>
                </div>
                <div className='px-6 py-4 space-x-3 justify-around' >
                  <button className='bg-blue-500 hover:bg-blue-800 text-white font-bold px-4 py-2 rounded' >Vedio</button>
                  <button className='bg-green-500 hover:bg-green-800 text-white font-bold px-4 py-2 rounded' >Source Code</button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Portfolio