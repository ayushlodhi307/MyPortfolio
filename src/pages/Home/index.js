import React from 'react'
import Header from '../../components/Header';
import Intro from './intro';
import About from './about';
import Projects from './Projects';
import Experience from './Experience';
import Contacts from './Contacts';

const Home = () => {
  return (
    <div >
        <Header/>
        <div className='px-40 sm:px-10 bg-primary'>
          <Intro/>
          <About/>
          <Experience/>
          <Projects/>
          <Contacts/>
        </div>

    </div>
  )
}

export default Home