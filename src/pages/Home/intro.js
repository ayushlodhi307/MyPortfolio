import React from 'react'

const Intro = () => {
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8'>
        <h1 className='text-white'>Hi, I am</h1>
        <h1 className='text-7xl sm:text-3xl text-secondary font-semibold'>Ayush Lodhi</h1>
        <h1 className='text-7xl sm:text-3xl text-white font-semibold'>I build things for the web.</h1>
        <p className='text-white w-2/3'>I am fullstack web Developer / Instructor. Currently I am working as React Developer in India.
             Also sharing my knowledge to the students that I have gained in my career through online 
             teaching across the world.</p>

        <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'>Get Started</button>
    </div>
  )
}

export default Intro ;