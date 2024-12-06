import {React, useState} from 'react'
import SectionTitle from '../../components/SectionTitle';
import { projects } from '../../resources/Projects';

const Projects = () => {
  
    const [selectedItemIndex, setselectedItemIndex] = useState("0");
    return (
      <div className="py-10">
        <SectionTitle title="Projects " />
       <div className="flex py-10 gap-20 sm:flex-col">
       <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3  sm:flex-row sm:overflow-scroll sm:w-full ">
          {projects.map((ex, index) => (
            <div
              onClick={() => {
                setselectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5 ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-2 bg-[#0da34227] py-3  "
                    : " text-white"
                }`}
              >
                {ex.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-xl">
            {/* {" "} */}
            {projects[selectedItemIndex].description}
          </h1>
          {/* <h1 className="text-white text-xl">
            {" "}
            {projects[selectedItemIndex].desc}
          </h1> */}
          <p className="text-white">
            ever be fixed. Add "@babel/plugin-proposal-private-property-in-object"
            to your devDependencies to work around this error. This will make this
            message go away.
          </p>
        </div>
       </div>
      </div>
    
  )
}

export default Projects;