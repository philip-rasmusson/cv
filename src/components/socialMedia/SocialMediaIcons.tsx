import './SocialMediaIcons.css'
import GlobalData from "../../data/GlobalData"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


export const SocialMediaIcons = () => {

  return (
    <>
      <a href="https://github.com/philip-rasmusson" target="blank"><FontAwesomeIcon icon={faGithub} className="social-media-icon" /></a>
      <a href="http://www.linkedin.com/in/philip-rasmusson/" target="blank"><FontAwesomeIcon icon={faLinkedinIn} className="social-media-icon" /></a>
      <a href={GlobalData.infoMail}><FontAwesomeIcon icon={faEnvelope} className="social-media-icon" /></a>
    </>
  )
}
