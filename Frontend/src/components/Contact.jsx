import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

function Contact() {
    const {register, handleSubmit, formState: { errors }, } = useForm();
    const navigate = useNavigate();
    
    const onSubmit = (data) => {
        console.log('Contact submitted', data);
        navigate('/');
    };

  return (
    <>
    <div className='flex h-screen items-center justify-center'>
      <div className="w-[600px]">
        <div>
            <form onSubmit={handleSubmit(onSubmit)} >
            
            <h1 className="font-bold text-3xl">Contact Us</h1>
            <div className='mt-4 space-y-2'>
                <span>Name</span>
                <br />
                <input type='text' placeholder='Enter your name' className='w-96 px-3 py-1 border rounded-md outline-none' {...register("name", { required: true })}/>
                <br />
                {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
            </div> 
            {/* Email block */}
            <div className='mt-4 space-y-2'>
                <span>Email</span>
                <br />
                <input type='email' placeholder='Email address' className='w-96 px-3 py-1 border rounded-md outline-none' {...register("email", { required: true })}/>
                <br />
                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            {/* Message block */}
            <div className='mt-4 space-y-2'>
                <span>Message</span>
                <br />
                <textarea placeholder='Type your message' className='w-96 px-3 py-1 border rounded-md outline-none' {...register("message", { required: true })}/>
                <br />
                {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            {/* Button */}
            <div className='flex mt-12'>
                <button type="submit" className='bg-pink-500 text-white rounded px-3 py-1 hover:bg-pink-700 duration-200'>
                    Submit
                </button>
            </div>
            </form>
        </div>
      </div>
      </div>
    </>
  );
};

export default Contact;
