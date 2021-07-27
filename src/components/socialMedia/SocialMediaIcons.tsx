import { useState, useContext } from 'react'
import './SocialMediaIcons.css'
import GlobalData from "../../data/GlobalData"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { SocialMediaData } from './data/SocialMediaData'
import { LanguageContext } from '../../shared/provider/LanguageProvider'


export const SocialMediaIcons = () => {

  const [infoDisplay, setInfoDisplay] = useState<string>('')
  const [language] = useContext(LanguageContext)

  const setDisplayLanguage = (textEng: string, textSwe: string) => {
    language === 'english'
      ? setInfoDisplay(textEng)
      : setInfoDisplay(textSwe)
  }

  return (
    <>
      <a href="https://github.com/philip-rasmusson" target="blank" className="social-media-icon-mobile" onMouseOver={() => setDisplayLanguage(SocialMediaData.githubEng, SocialMediaData.github)} onMouseLeave={() => setInfoDisplay('')}><FontAwesomeIcon icon={faGithub} className="social-media-icon icon1" /></a>

      <a href="http://www.linkedin.com/in/philip-rasmusson/" className="social-media-icon-mobile" target="blank" onMouseOver={() => setDisplayLanguage(SocialMediaData.linkedinEng, SocialMediaData.linkedin)} onMouseLeave={() => setInfoDisplay('')}><FontAwesomeIcon icon={faLinkedinIn} className="social-media-icon icon2" /></a>

      <a href={GlobalData.infoMail} className="social-media-icon-mobile" onMouseOver={() => setDisplayLanguage(SocialMediaData.emailEng, SocialMediaData.email)} onMouseLeave={() => setInfoDisplay('')}><FontAwesomeIcon icon={faEnvelope} className="social-media-icon icon3" /></a>

      <div className="social-media-info">{infoDisplay}</div>
    </>
  )
}
