import React from "react";
import SectionTitle from "../../components/SectionTitle";

const About = () => {
  const skills=[
    "JavaScript",
    "Java",
    "React",
    "Node",
    "Express",
    "MongoDB",
  ]
  return (
    <div>
      <SectionTitle title="About" />

      <div className="flex sm:flex-col p-10 sm:p-1 w-full items-center gap-10">
        <div className="h-[70vh] px-10 w-1/2 sm:w-full">
          <lottie-player
            src="https://lottie.host/d0afd79b-a4fa-477c-918c-3c9486983dcb/9iSK36Pzvn.json"
            background="##fff"
            speed="1"
            autoplay
            direction="1"
            mode="normal"
          ></lottie-player>
        </div>
        <div className="text-white w-1/2 sm:w-full flex flex-col gap-5">
          <p>
            Hello! My name is Ayush Lodhi. I enjoy creating things that live on
            the Internet. My interest in web development started back in 2024
            when I decided to try editing custom Tumbir Themes-turns out hacking
            together a custom reblog button tought me a lot about HTML & CSS!
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients. I also recently launched a
            course that covers everything you need to build a web app with the
            Spotify API using Node & React. Here are a few technologies I've
            been working with recently:
          </p>
        </div>
      </div>
      <div  className="py-5 px-10 sm:px-0">
      <h1 className="text-tertiary"> Here are a few technology I've been working with recently:</h1>
       <div className="flex flex-wrap gap-10 my-5">{skills.map((skills,index)=>(
        <div className="border-[1px] border-tertiary rounded px-10 py-3">
        <h1 className="text-tertiary ">{skills}</h1>
       </div>
      ))}</div>
      </div>
    </div>
  );
};

export default About;
