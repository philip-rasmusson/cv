import './HeaderDesktop.css'
import headerImg from '../../../shared/img/IMG_0085.png'
import { textEnglish } from '../../../data/TextEnglish'
import { SocialMediaIcons } from "../../socialMedia/SocialMediaIcons"


export const HeaderDesktop = () => {

  return (
    <div className="header">
      <div className="main-line"></div>
      <div className="title-wrapper">
        <h1 className="title-name font-upper">{textEnglish.titleName}</h1>
        <h3 className="title-desc font-upper">{textEnglish.titleDescSwe}</h3>
      </div>
      <div className="title-img">
        <img src={headerImg} alt="Profile picture" />
      </div>
      <div className="social-media-wrapper">
        {SocialMediaIcons()}
      </div>
    </div>
  )
}
