import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
    <div className='flex justify-center mt-20'>
        <p className='text-center'>Hello! I am Suhail.</p>
        <Link to="/">
            <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
        </Link>
    </div>
    </>
  )
}

export default About;
