import './experience.css'
import {BsPatchCheckFill} from "react-icons/bs"

const Experience = () => {

  const frontSkills =[
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "jQuery",
    "Sass",
    "TypeScript",
    "React.js",
    "Owl Carousel",
    "EmailJS",
    "React Slick",
    "Framer-motion",
    "React-Bootstrap",
    "Redux",
    "Redux/toolkit",
    "Dealing with API",
  ]
  const otherSkills =[
    "C++",
    "Java",
    "Python",
    "R",
    "C#",
    "PHP",
    "SQL",
    "OOP",
    "Data Structers",
    "biopython",
    "Github",
    "Linux",
  ]

  return (
    <section id='experience'>
        <h5>what skills i've</h5>
        <h2>my experience</h2>
      <div className="container experience-container">
        <div className="fronend-exp">
          <h3>frontend skills</h3>
          <div className="exp-content">
            {frontSkills.map((skill,idx)=>(
              <div className="exp-details" key={idx}>
              <BsPatchCheckFill/>
              <div>
              <h4>{skill}</h4>
              </div>
            </div>
            ))}
          </div>
        </div>
        <div className="another-exp">
        <h3>other programming skills</h3>
        <div className="exp-content">
            {otherSkills.map((skill,idx)=>(
              <div className="exp-details" key={idx}>
              <BsPatchCheckFill/>
              <div>
              <h4>{skill}</h4>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
