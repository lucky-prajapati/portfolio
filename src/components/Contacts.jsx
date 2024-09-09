import axios from 'axios'
import React from 'react'
import { useForm } from "react-hook-form"
import {toast} from "react-hot-toast"

function Contacts() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async(data) => {
        const userInfo={
            name:data.name,
            email:data.email,
            massage:data.massage
        }
        try{
            await axios.post("https://getform.io/f/ayvpddkb",userInfo);
            toast.success("Your massage has been send");
        }catch (error){
            //console.log(error);
            toast.error("Something went wrong")
        }
        
      };
  return (
    <>
    <div name="Contacts" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <h1 className='text-3xl font-bold mb-4'>Contact</h1>
        <span>Please fill out the form below to contact me</span>
        <div className='flex flex-col items-center justify-center mt-5'>

            <form onSubmit={handleSubmit(onSubmit)} 
            //action="https://getform.io/f/ayvpddkb" 
            //method="POST" 
            className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
                <h1 className='text-lg font-semibold mb-4'>Send your massage</h1>
                <div className='flex flex-col mb-4'>
                    <label className='block text-gray-700'>Name</label>
                    <input {...register("name", { required: true })} className='shadow appearance-none border rounded-lg py-2 px=3 text-gray-700 leading-tight focus:outline-none focus:shadoe-outline' id="name" name="name" type="text" placeholder="Enter your Name" />
                    {errors.name && <span>This field is required</span>}

                </div>
                <div className='flex flex-col mb-4'>
                    <label  className='block text-gray-700'>Email</label>
                    <input {...register("email", { required: true })} className='shadow appearance-none border rounded-lg py-2 px=3 text-gray-700 leading-tight focus:outline-none focus:shadoe-outline' id="email" name="email" type="email" placeholder="Enter your email" />
                    {errors.email && <span>This field is required</span>}

                </div>
                <div className='flex flex-col mb-4'>
                    <label  className='block text-gray-700'>Massage</label>
                    <textarea {...register("massage", { required: true })} className='shadow appearance-none border rounded-lg py-2 px=3 text-gray-700 leading-tight focus:outline-none focus:shadoe-outline' id="massage" name="massage" type="text" placeholder="Enter your Query" />
                    {errors.massage && <span>This field is required</span>}

                </div>
                    <button type="submit" className='bg-black text-white rounded-xl px-3 py2 hover:border-b-gray-700 duration-300'>Send</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Contacts