import './about.css'
import myimg from "../../assets/myimg.jpg";
import {FiAward} from 'react-icons/fi';
import {MdCastForEducation} from 'react-icons/md';
import {VscFileCode} from 'react-icons/vsc';
const About = () => {
  return (
    <section id='about'>
      <h5>Get To know</h5>
      <h2>about me</h2>

      <div className="container about-container">
        <div className="img-side">
            <div className="my-img-side">
                <img src={myimg} alt="" />
            </div>
        </div>
        <div className="content-side">
            <div className="about-cards">
                <div className="about-card">
                    <MdCastForEducation className='about-card-icon'/>
                    <h5>education</h5>
                    <small>FCI graduate</small>
                </div>
                <div className="about-card">
                    <FiAward className='about-card-icon'/>
                    <h5>experience</h5>
                    <small>+2 years working</small>
                </div>
                <div className="about-card">
                    <VscFileCode className='about-card-icon'/>
                    <h5>projects</h5>
                    <small>+12 completed</small>
                </div>
            </div>
            <p>My name is Khaled Karam Mahmoud, Welcome to my portfolio <br/> I graduated from Assiut University faculty of computers and information in 2022 , My GPA = 3.28 (very good) <br/> 
              I specialized in frontend web development and have some experience in backend , I started working from 2 years ago as a freelancer and now open to work.
             </p>

            <a className='btn btn-primary' href='#contact'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
