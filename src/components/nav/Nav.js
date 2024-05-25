import "./nav.css"
import {AiOutlineHome} from "react-icons/ai"
import {SiAboutdotme} from "react-icons/si"
import {GiSkills} from "react-icons/gi"
import {FaLaptopCode} from "react-icons/fa"
import {BiMessage} from "react-icons/bi"
import { useState } from "react"
const Nav = () => {
    const [active,setActive] =useState('#');
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about" ><SiAboutdotme/></a>
      <a href="#experience"><GiSkills/></a>
      <a href="#portfolio"><FaLaptopCode/></a>
      <a href="#contact"><BiMessage/></a>
    </nav>
  )
}

export default Nav

