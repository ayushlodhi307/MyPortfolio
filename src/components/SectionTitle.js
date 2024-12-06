import React from 'react'

const SectionTitle = ({title,}) => {
  return (
    <div className='flex gap-5 items-center'>
    <h1  className='text-3xl text-white flex '>{title}</h1>
    <div className='h-[1px] w-60 bg-white '></div>
    </div>

  )
}

export default SectionTitle;