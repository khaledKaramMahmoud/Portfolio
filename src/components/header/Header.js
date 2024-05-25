import "./header.css";
import CV from "../../assets/KhaledCV.pdf"
import me from "../../assets/me.png"
import bg from "../../assets/kkk.jpg"
import {BsLinkedin} from "react-icons/bs"
import {FaFacebook} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {VscColorMode} from "react-icons/vsc"
import { useState,useEffect } from "react";
const Header = () => {
  const [theme, setTheme] = useState("dark");
  const [settings, setSettings] = useState({
    "--bg-color":"#1f1f38",
    "--bg-variant-color":"#2c2c6c",
    "--primary-color":"#4db5ff",
    "--primary-variant-color":"rgba(77,181,255,.4)",
    "--white-color":"#fff",
    "--light-color":"rgba(255,255,255,.6)",
    "--container-lg":"75%",
    "--container-md":"86%",
    "--container-sm" : "90%",
    "--transition ": "all .4s ease",
  });


  const themes = [
    {
      "--btnC":"#222",
      "--card-p":"rgba(255,255,255,.6)",
      "--slickarrow":"#fff",
      "--footer":"#4db5ff",
      "--footerC":"#1f1f38",
      "--bg-color":"#1f1f38",
      "--nvcolor":"#rgba(0,0,0,.5)",
      "--bg-variant-color":"#2c2c6c",
      "--primary-color":"#4db5ff",
      "--primary-variant-color":"rgba(77,181,255,.4)",
      "--white-color":"#fff",
      "--light-color":"rgba(255,255,255,.6)",
    },
    {
      "--btnC":"#fff",
      "--card-p":"#fff",
      "--slickarrow":"#1f1f38",
      "--footer":"#1f1f38",
      "--footerC":"#fff",
      "--bg-color":"linear-gradient(#fff,#fff,#f7f7f7,#ececec)",
      "--nvcolor":"rgba(77, 181, 255,.2)",
      "--bg-variant-color":"rgba(77,181,255,.4)",
      "--primary-color":"#4db5ff",
      "--primary-variant-color":"#4db5ff",
      "--white-color":"#1f1f38",
      "--light-color":"#1f1f38",
    },
  ];

    //make a func to choose light or dark theme and use in divs onClick
    function changeTheme(i) {
    const _theme = { ...themes[i] };
    setTheme(i === 0 ? "dark" : "light");
    //after choosing light or dark theme update settings vars as i choose
    let _settings = { ...settings }; //create new obj of settings
    for (let key in _theme) {
      _settings[key] = _theme[key];
    }
    setSettings(_settings);
  }

    //then useEffect to use changeTheme and other changes below func when settings changes
    useEffect(() => {
    //root element is the root in css
    const root = document.documentElement;
    for (let key in settings) {
      // setProperty to update css variable
      root.style.setProperty(key, settings[key]);
    }
  }, [settings]);

  return <header 
  className={theme==="dark" ? "" : "bgheader-l"}>
    <div className="container header-container">
        
        <div>
          <div
           className={theme==="dark" ? "dark-mode" : "light-mode"}
           onClick={theme==="dark"?() => changeTheme(1):() => changeTheme(0)}><VscColorMode/></div>
        </div>
        
        <h5>Hello I'm</h5>
        <div className="title">
        <h1>Khaled Karam</h1>
        <h5 className="text-light">Front End Developer</h5>
        </div>
        <div className="header-btns">
            <a download href={CV} className="btn">Download CV</a>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>

        <div className="header-socials">
            <a href="https://www.linkedin.com/in/khaled-karam-8365531ab/" target="_blank"><BsLinkedin/></a>
            <a href="https://www.facebook.com/profile.php?id=100006004936837" target="_blank"><FaFacebook/></a>
            <a href="https://github.com/khaledKaramMahmoud" target="_blank"><FaGithub/></a>
        </div>

        <div className="me">
            <img src={me} alt="" />
        </div>

        <a href="#contact" className="scroll-down">Scroll Down</a>
        
    </div>
  </header>;
};

export default Header;
