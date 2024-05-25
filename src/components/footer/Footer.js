import './footer.css'
import {GrLinkedinOption} from "react-icons/gr"
import {RiGithubLine} from "react-icons/ri"
import {FaFacebookF} from "react-icons/fa"
import logo from "../../assets/logo-no-background.png"
const Footer = () => {
  return (
    <footer>
        <img src={logo} alt="" />
        <div>
            <a href="https://www.linkedin.com/in/khaled-karam-8365531ab/" target="_blank" className='icon'><GrLinkedinOption/></a>
            <a href="https://github.com/khaledKaramMahmoud" target="_blank" className='icon'><RiGithubLine/></a>
            <a href="https://www.facebook.com/profile.php?id=100006004936837" target="_blank" className='icon'><FaFacebookF/></a>
        </div>
        <p>&copy;Khaled Karam. All rights reserved.</p>
    </footer>
  )
}

export default Footer
