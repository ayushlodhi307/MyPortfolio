import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { contact } from '../../resources/Contact'

const Contacts = () => {
  return (
    <div className='gap-10'>
        <SectionTitle title="Say Hello"/>
        <div className='flex flex-col'>
            <h1 className='text-white'>{"{"}</h1>
            {Object.keys(contact).map((key) => (
                <h1>
                    <span className='text-white'>{key}:</span><span className='text-white'>{contact[key]}</span>
                    
                </h1>
                
            ))}
            <h1 className='text-white'>{"}"}</h1>
        </div>
    </div>
  )
}

export default Contacts