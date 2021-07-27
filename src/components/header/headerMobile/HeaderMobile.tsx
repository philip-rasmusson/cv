import './HeaderMobile.css'
import { HeaderData } from '../data/Header-data'
import { SocialMediaIcons } from "../../socialMedia/SocialMediaIcons"
import { SelectLanguage } from '../../SelectLanguage'

export const HeaderMobile = () => {
  return (
    <div className="header-mobile">
      <div className="main-line-mobile"></div>
      <div className="title-wrapper-mobile">
        <h1 className="title-name-mobile font-upper">{HeaderData.titleName}</h1>
        <h3 className="title-desc-mobile font-upper"><SelectLanguage textEng={HeaderData.titleDescEng} textSwe={HeaderData.titleDesc} /></h3>
      </div>
      <div className="social-media-mobile-wrapper">
        {SocialMediaIcons()}
      </div>
    </div>
  )
}
