import './AboutMeDesktop.css'
import headerImg from '../../../shared/img/IMG_0085.png'
import { AboutMeDataEnglish } from '../data/AboutMeData'
import { useState } from 'react'
import javascript from '../../../shared/img/icons/javascript.svg'
import css from '../../../shared/img/icons/css.svg'
import html from '../../../shared/img/icons/html.svg'
import react from '../../../shared/img/icons/react.svg'
import typescript from '../../../shared/img/icons/typescript.svg'
import nodejs from '../../../shared/img/icons/nodejs.svg'
import csharp from '../../../shared/img/icons/csharp.svg'
import entity from '../../../shared/img/icons/entity.svg'
import sql from '../../../shared/img/icons/sql.svg'
import mongodb from '../../../shared/img/icons/mongodb.svg'
import git from '../../../shared/img/icons/git.svg'
import scrum from '../../../shared/img/icons/scrum.svg'
import adobe from '../../../shared/img/icons/adobe.svg'
import { SelectLanguage } from '../../../components/SelectLanguage'

export const AboutMeDesktop = () => {
  const [icon, setIcon] = useState<any>(html)
  const [linkPath, setLinkPath] = useState<string>(AboutMeDataEnglish.linkHTML)
  const [bgColor, setBgcolor] = useState<any>(AboutMeDataEnglish.bgcolorHTML)


  const selectIcon = (icon: any, link: string, color: any) => {
    setIcon(icon)
    setLinkPath(link)
    setBgcolor(color)
  }

  return (
    <div className="page-wrapper">
      <div className="desktop-wrapper">
        <div className="aboutme-desktop-wrapper">
          <h2>
            <span className="aboutme-desktop-title"><SelectLanguage
              textEng={AboutMeDataEnglish.hiEng}
              textSwe={AboutMeDataEnglish.hi}
            /></span> <br /><br />
            <SelectLanguage
              textEng={AboutMeDataEnglish.aboutMeEng}
              textSwe={AboutMeDataEnglish.aboutMe}
            />
            <br /><br />
            <SelectLanguage
              textEng={AboutMeDataEnglish.aboutMe2Eng}
              textSwe={AboutMeDataEnglish.aboutMe2}
            />
          </h2>
          <img src={headerImg} alt="Profile" className="about-me-desktop-img" />
          <div className="about-me-desktop-competence-wrapper" style={{ backgroundColor: bgColor, color: '#ffffff' }}>
            <h3 ><SelectLanguage
              textEng={AboutMeDataEnglish.mainCompetenceEng}
              textSwe={AboutMeDataEnglish.mainCompetence}
            /></h3>
            <div className="about-me-desktop-competence-wrapper-items">
              <p onClick={() => selectIcon(html, AboutMeDataEnglish.linkHTML, AboutMeDataEnglish.bgcolorHTML)}>{AboutMeDataEnglish.html}</p>
              <p onClick={() => selectIcon(css, AboutMeDataEnglish.linkCSS, AboutMeDataEnglish.bgcolorCSS)}>{AboutMeDataEnglish.CSS}</p>
              <p onClick={() => selectIcon(javascript, AboutMeDataEnglish.linkJavascript, AboutMeDataEnglish.bgcolorJavascript)}>{AboutMeDataEnglish.javascript}</p>
              <p onClick={() => selectIcon(react, AboutMeDataEnglish.linkReact, AboutMeDataEnglish.bgcolorReact)}>{AboutMeDataEnglish.react}</p>
              <p onClick={() => selectIcon(typescript, AboutMeDataEnglish.linkTypescript, AboutMeDataEnglish.bgcolorTypescript)}>{AboutMeDataEnglish.typescript}</p>
              <p onClick={() => selectIcon(nodejs, AboutMeDataEnglish.linkNodejs, AboutMeDataEnglish.bgcolorNodeJS)}>{AboutMeDataEnglish.nodejs}</p>
              <p onClick={() => selectIcon(csharp, AboutMeDataEnglish.linkCSharp, AboutMeDataEnglish.bgcolorCSharp)}>{AboutMeDataEnglish.csharp}</p>
              <p onClick={() => selectIcon(entity, AboutMeDataEnglish.linkEntity, AboutMeDataEnglish.bgcolorEntity)}>{AboutMeDataEnglish.entity}</p>
              <p onClick={() => selectIcon(sql, AboutMeDataEnglish.linkSQL, AboutMeDataEnglish.bgcolorSQL)}>{AboutMeDataEnglish.sql}</p>
              <p onClick={() => selectIcon(mongodb, AboutMeDataEnglish.linkMongodb, AboutMeDataEnglish.bgcolorMongoDB)}>{AboutMeDataEnglish.mongodb}</p>
              <p onClick={() => selectIcon(git, AboutMeDataEnglish.linkGit, AboutMeDataEnglish.bgcolorGit)}>{AboutMeDataEnglish.git}</p>
              <p onClick={() => selectIcon(scrum, AboutMeDataEnglish.linkScrum, AboutMeDataEnglish.bgcolorScrum)}>{AboutMeDataEnglish.scrum}</p>
              <p onClick={() => selectIcon(adobe, AboutMeDataEnglish.linkAdobe, AboutMeDataEnglish.bgcolorAdobe)}>{AboutMeDataEnglish.adobe}</p>
            </div>
          </div>
          <div className="about-me-desktop-icon-wrapper">
            <img src={icon} alt="" className="about-me-desktop-icon" />
            <p onClick={() => window.open(linkPath)}><SelectLanguage textEng={AboutMeDataEnglish.iconTextEng} textSwe={AboutMeDataEnglish.iconText} /></p>
          </div>
        </div>
      </div>
    </div>
  )
}
