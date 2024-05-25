import './portfolio.css'
import p1 from "../../assets/p1.png"
import p3 from "../../assets/p3.png"
import p2 from "../../assets/p2.png"
import p4 from "../../assets/p4.png"
import p5 from "../../assets/p5.png"
import p7 from "../../assets/p7.png"
import p8 from "../../assets/p8.png"
import p9 from "../../assets/p9.png"
import p10 from "../../assets/p10.png"
import p11 from "../../assets/p11.png"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {

    const cards=[
        
        {
            img:p4,
            title:'Foodies Hub',
            desc:'website with multi colors, themes, fonts and animation using react.js about foods ',
            link:'https://foodieshub-multicolor.netlify.app/',
        },
        {
            img:p2,
            title:'foodera resturant',
            desc:'Resturant Website nice and simple design',
            link:'https://foodera-resturant.netlify.app/',
        },
        
        {
          img:p11,
          title:'words translate',
          desc:'client needs a website to translate words in different languages you select how many languages you want to translate to and according to number of words price will be',
          link:'https://wsl-translate.netlify.app/',
        },
        {
            img:p10,
            title:'courses website',
            desc:'website to a customer needs to present different courses for different instructors in 3 languages',
            link:'https://coursessite.netlify.app/home.html?',
        },
        {
            img:p5,
            title:'fitness club',
            desc:'React project with pretty design and multible libraries',
            link:'https://gym-club1.netlify.app/',
        },
        {
            img:p8,
            title:'Web agency',
            desc:'responsive website pure html, css and jQuery',
            link:'https://suspicious-perlman-d43b89.netlify.app/',
        },
        {
            img:p9,
            title:'control panel app',
            desc:'pretty panel to control mobile application for a client',
            link:'https://mobappdashboard.netlify.app/',
        },
        {
            img:p1,
            title:'back tours',
            desc:'responsive website pure html, css and js',
            link:'https://determined-noyce-09d106.netlify.app/',
        },
        
        {
            img:p7,
            title:'tea station',
            desc:'responsive website pure html, css and js ',
            link:'https://awesome-ptolemy-165e15.netlify.app/',
        },
        {
            img:p3,
            title:'course website',
            desc:'website to a customer needs to present his course in russian language and contact via whatsapp',
            link:'https://coursesite2.netlify.app/',
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll:1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll:1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <section id='portfolio'>
      <h5>some of my works</h5>
      <h2>portfolio</h2>

      <div className="container portfolio-container">
      <div className="cards">
        <Slider {...settings}>
        {cards.map((card,idx)=>(
            <div key={idx} className="card">
                <div className="card-img">
                 <img src={card.img} alt="" />
                </div>     
                <div className="card-details">
                    <h1>{card.title}</h1>
                    <p>{card.desc}</p>
                    <div className='card-btn'>
                      <a href="https://github.com/khaledKaramMahmoud" className='btn' target='_blank'>Github</a>
                      <a href={card.link} className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </div>
            </div>
        ))} 
        </Slider>

        
      </div>
      </div>
    </section>
  )
}

export default Portfolio
