import './AboutMeDesktop.css'
import headerImg from '../../../shared/img/IMG_0085.png'
import { AboutMeDataEnglish } from '../data/AboutMeDataEnglish'
import { useState } from 'react'
// import javascript from '../../../shared/img/icons/javascript.png'
// import css from '../../../shared/img/icons/css.png'
// import react from '../../../shared/img/icons/react.png'
// import nodejs from '../../../shared/img/icons/nodejs.png'
// import csharp from '../../../shared/img/icons/csharp.png'
// import entity from '../../../shared/img/icons/entity.png'
// import sql from '../../../shared/img/icons/sql.png'
import mongodb from '../../../shared/img/icons/mongodb.png'
// import git from '../../../shared/img/icons/git.png'
// import scrum from '../../../shared/img/icons/scrum.png'
// import webdesign from '../../../shared/img/icons/webdesign.png'
// import adobe from '../../../shared/img/icons/adobe.png'
// import swedish from '../../../shared/img/icons/swedish.png'
// import english from '../../../shared/img/icons/english.png'

export const AboutMeDesktop = () => {

  const [icon, setIcon] = useState<any>(mongodb)

  return (
    <div className="page-wrapper">
      <div className="desktop-wrapper">
        <div className="aboutme-desktop-wrapper">
          <h3>
            <h2>{AboutMeDataEnglish.hej}</h2> <br />
            {AboutMeDataEnglish.omMig}<br /><br />
            {AboutMeDataEnglish.omMig2}
          </h3>
          <img src={headerImg} alt="Profile picture" className="about-me-desktop-img" />
          <div className="about-me-desktop-competence-wrapper">
            <h3>{AboutMeDataEnglish.mainCompetence}</h3>
            <div className="about-me-desktop-competence-wrapper-items">
              <p>{AboutMeDataEnglish.htmlCSS}</p>
              <p>{AboutMeDataEnglish.javascript}</p>
              <p>{AboutMeDataEnglish.react}</p>
              <p>{AboutMeDataEnglish.nodejs}</p>
              <p>{AboutMeDataEnglish.csharp}</p>
              <p>{AboutMeDataEnglish.entity}</p>
              <p>{AboutMeDataEnglish.sql}</p>
              <p>{AboutMeDataEnglish.mongodb}</p>
              <p>{AboutMeDataEnglish.git}</p>
              <p>{AboutMeDataEnglish.scrum}</p>
              <p>{AboutMeDataEnglish.webdesign}</p>
              <p>{AboutMeDataEnglish.adobe}</p>
              <p>{AboutMeDataEnglish.swedish}</p>
              <p>{AboutMeDataEnglish.english}</p>
            </div>
          </div>
          <div className="about-me-desktop-icon-wrapper">
            <img src={icon} alt="" className="about-me-desktop-icon" />
            <p>{AboutMeDataEnglish.iconText}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
