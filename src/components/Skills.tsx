import React from "react";
import "../app/styles/skills.css";

const Skills = () => {
  return (
    <div id="skills" className="skills-container ">

      <div className="skills-grid">
{/* first column */}
        <div data-aos="zoom-in-up" className="skills-left">
          <h2 className="skills-heading">Technologies I work with</h2>
          <p className="skills-text">
            
            As a seasoned web developer, I possess a solid foundation in HTML,
            CSS, JavaScript, and related frameworks (React, Next.js). My
            proficiency extends to Tailwind CSS for efficient design, with a
            commitment to ongoing learning and professional growth.
          </p>
        </div>
        {/* second column */}
        <div>
          <div className="skills-right">
            <div className="skills-icons-grid">
              <div className="skills-space"></div>
              <h2 data-aos="zoom-in-up">TypeScript</h2>
              <h2 data-aos="zoom-in-up">Next.js</h2>
              <h2 data-aos="zoom-in-up">HTML</h2>
            </div>

            <div className="skills-space">
              <h2 data-aos="zoom-in-up">Taliwind</h2>
              <h2 data-aos="zoom-in-up">Node.js</h2>
              <h2 data-aos="zoom-in-up">CSS</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
