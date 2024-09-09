import React from 'react'
import html from "../../public/html.png"
import javascript from "../../public/javascript.png"
import css from "../../public/css.jpg"
import node from "../../public/node.png"
import express from "../../public/express.png"
import reactjs from "../../public/reactjs.png"

function Experiance() {
  const cardItem=[
    {
      id:1,
      logo:html,
      name:"html"
    },
    {
      id:2,
      logo:javascript,
      name:"javascript"
    },
    {
      id:3,
      logo:css,
      name:"css"
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
    {
        id:6,
        logo:express,
        name:"express"
    },
  ];
  return (
    <>
    <div name="Experiance" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
      <div>
        <h1 className='text-3xl font-bold mb-5'>Exprience</h1>
        <p className='underline font-semibold'>I've more than 0 to 2 years of experiance in below technologies.</p>
        <div className=' grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
          {
            cardItem . map(({id, logo, name}) => (
              <div className='flex flex-col items-center justify-center rounded-full md:w-[200px] md:h-[200px] shadow-lg p-1 cursor-pointer hover:scale-125 duration-300' key={id}>
                <img src={logo} className='w-[150px] rounded-full' alt="" />
                <div>
                  <div>{name}</div>
                  
                </div>
                
              </div>
            ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Experiance