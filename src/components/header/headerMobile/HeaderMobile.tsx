import './HeaderMobile.css'
import headerImg from '../../../shared/img/IMG_0085.png'
import { textEnglish } from '../../../data/TextEnglish'
import { SocialMediaIcons } from "../../socialMedia/SocialMediaIcons"


export const HeaderMobile = () => {
  return (
    <div className="header-mobile">
      <div className="main-line-mobile"></div>
      <div className="title-wrapper-mobile">
        <h1 className="title-name-mobile font-upper">{textEnglish.titleName}</h1>
        <h3 className="title-desc-mobile font-upper">{textEnglish.titleDescSwe}</h3>
      </div>
      <div className="title-img-mobile">
        <img src={headerImg} alt="Profile picture" />
      </div>
      <div className="social-media-mobile-wrapper hidden">
        {SocialMediaIcons()}
      </div>
    </div>
  )
}
