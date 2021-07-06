import './AboutMeDesktop.css'
import headerImg from '../../../shared/img/IMG_0085.png'
import { AboutMeDataEnglish } from '../data/AboutMeDataEnglish'

export const AboutMeDesktop = () => {
  return (
    <div className="page-wrapper">
      <div className="desktop-wrapper">
        <div className="aboutme-desktop-wrapper">
          <h3>
            {AboutMeDataEnglish.aboutMe}<br /><br />
            {AboutMeDataEnglish.aboutMe2}
          </h3>
          <img src={headerImg} alt="Profile picture" />

        </div>
      </div>
    </div>
  )
}
