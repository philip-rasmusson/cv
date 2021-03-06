import './HeaderDesktop.css'
import { HeaderData } from '../data/Header-data'
import { SocialMediaIcons } from "../../socialMedia/SocialMediaIcons"
import { SelectLanguage } from '../../SelectLanguage'

export const HeaderDesktop = () => {
  return (
    <div className="header">
      <div className="main-line"></div>
      <div className="title-wrapper">
        <h1 className="title-name font-upper">{HeaderData.titleName}</h1>
        <h3 className="title-desc font-upper"><SelectLanguage textEng={HeaderData.titleDescEng} textSwe={HeaderData.titleDesc} /></h3>
      </div>

      <div className="social-media-wrapper">
        {SocialMediaIcons()}
      </div>
    </div>
  )
}
