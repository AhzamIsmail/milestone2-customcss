import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import '../app/styles/projects.css';

const data =[
    {
        id:0,
        title:"Calculator App",
        desc:"Fast and accurate calculations with this easy-to-use calculator.",
        img: "/project_02.jpeg",
        tags: ["CSS","HTML", "Typescript" ],
    },
    {
      id:1,
      title:"Static Interactive Resume",
        desc:"A typescript-based interactive resume built with HTML,CSS allowing users to showcase their skills dynamically.",
        img: "/project_01.png",
        tags: ["Node","CSS", "Typescript" ],
    }
]

const Projects = () => {
  return (
    <div id="projects"className="projects-container">
     <Heading title='My Projects' /> 
     <div className="projects-grid projects-grid-xl projects-grid-md-2 projects-grid-lg-3 projects-center">
      {data.map(el => (
      < Card
      key={el.id}
      title={el.title}
      desc={el.desc}
      img={el.img}
      tags={el.tags}
      />
      ))}
      </div> 
    </div>
  );
};

export default Projects;
