import './AboutMeDesktop.css'
import headerImg from '../../../shared/img/IMG_0085.png'
import { AboutMeDataEnglish } from '../data/AboutMeDataEnglish'
import { useState, useContext } from 'react'
import { GlobalContext } from '../../../shared/provider/GlobalProvider'
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
import webdesign from '../../../shared/img/icons/webdesign.svg'
import adobe from '../../../shared/img/icons/adobe.svg'
import swedish from '../../../shared/img/icons/swedish.svg'
import english from '../../../shared/img/icons/english.svg'
import LocalStorage from '../../../shared/cache/LocalStorage'

export const AboutMeDesktop = () => {

  const [globalValue, setGlobalValue] = useContext(GlobalContext)


  const [icon, setIcon] = useState<any>()
  const [iconText, setIconText] = useState<string>('')
  const [linkPath, setLinkPath] = useState<string>('')
  const [bgColor, setBgcolor] = useState<any>('initial')
  const [fontColor, setFontColor] = useState<any>('#454545')


  const selectIcon = (icon: any, text: string, link: string, color: any) => {
    setIcon(icon)
    setIconText(text)
    setLinkPath(link)
    setBgcolor(color)
    setFontColor('#f1f1f1')
  }

  console.log(globalValue)


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
          <div className="about-me-desktop-competence-wrapper" style={{ backgroundColor: bgColor, color: '#ffffff' }}>
            <h3 style={{ color: fontColor }}>{AboutMeDataEnglish.mainCompetence}</h3>
            <div className="about-me-desktop-competence-wrapper-items">
              <p style={{ color: fontColor }} onClick={() => selectIcon(html, AboutMeDataEnglish.iconText, AboutMeDataEnglish.linkHTML, AboutMeDataEnglish.bgcolorHTML)}>{AboutMeDataEnglish.html}</p>
              <p style={{ color: fontColor }} onClick={() => selectIcon(css, AboutMeDataEnglish.iconText, AboutMeDataEnglish.linkCSS, AboutMeDataEnglish.bgcolorCSS)}>{AboutMeDataEnglish.CSS}</p>
              <p style={{ color: fontColor }} onClick={() => selectIcon(javascript, AboutMeDataEnglish.iconText, AboutMeDataEnglish.linkJavascript, AboutMeDataEnglish.bgcolorJavascript)}>{AboutMeDataEnglish.javascript}</p>
              <p style={{ color: fontColor }} onClick={() => selectIcon(react, AboutMeDataEnglish.iconText, AboutMeDataEnglish.linkReact, AboutMeDataEnglish.bgcolorReact)}>{AboutMeDataEnglish.react}</p>
              <p style={{ color: fontColor }} onClick={() => selectIcon(typescript, AboutMeDataEnglish.iconText, AboutMeDataEnglish.linkTypescript, AboutMeDataEnglish.bgcolorTypescript)}>{AboutMeDataEnglish.typescript}</p>
              <p style={{ color: fontColor }} onClick={() => selectIcon(nodejs, AboutMeDataEnglish.iconText, AboutMeDataEnglish.linkNodejs, AboutMeDataEnglish.bgcolorNodeJS)}>{AboutMeDataEnglish.nodejs}</p>
              <p style={{ color: fontColor }} onClick={() => selectIcon(csharp, AboutMeDataEnglish.iconText, AboutMeDataEnglish.linkCSharp, AboutMeDataEnglish.bgcolorCSharp)}>{AboutMeDataEnglish.csharp}</p>
              <p style={{ color: fontColor }} onClick={() => selectIcon(entity, AboutMeDataEnglish.iconText, AboutMeDataEnglish.linkEntity, AboutMeDataEnglish.bgcolorEntity)}>{AboutMeDataEnglish.entity}</p>
              <p style={{ color: fontColor }} onClick={() => selectIcon(sql, AboutMeDataEnglish.iconText, AboutMeDataEnglish.linkSQL, AboutMeDataEnglish.bgcolorSQL)}>{AboutMeDataEnglish.sql}</p>
              <p style={{ color: fontColor }} onClick={() => selectIcon(mongodb, AboutMeDataEnglish.iconText, AboutMeDataEnglish.linkMongodb, AboutMeDataEnglish.bgcolorMongoDB)}>{AboutMeDataEnglish.mongodb}</p>
              <p style={{ color: fontColor }} onClick={() => selectIcon(git, AboutMeDataEnglish.iconText, AboutMeDataEnglish.linkGit, AboutMeDataEnglish.bgcolorGit)}>{AboutMeDataEnglish.git}</p>
              <p style={{ color: fontColor }} onClick={() => selectIcon(scrum, AboutMeDataEnglish.iconText, AboutMeDataEnglish.linkScrum, AboutMeDataEnglish.bgcolorScrum)}>{AboutMeDataEnglish.scrum}</p>
              {/* <p style={{ color: fontColor }} onClick={() => selectIcon(webdesign, AboutMeDataEnglish.iconText, AboutMeDataEnglish.linkHTML, AboutMeDataEnglish.bgcolorWebdesign)}>{AboutMeDataEnglish.webdesign}</p> */}
              <p style={{ color: fontColor }} onClick={() => selectIcon(adobe, AboutMeDataEnglish.iconText, AboutMeDataEnglish.linkAdobe, AboutMeDataEnglish.bgcolorAdobe)}>{AboutMeDataEnglish.adobe}</p>
              {/* <p onClick={() => selectIcon(swedish, AboutMeDataEnglish.languageText)}>{AboutMeDataEnglish.swedish}</p>
              <p onClick={() => selectIcon(english, AboutMeDataEnglish.languageText)}>{AboutMeDataEnglish.english}</p> */}
            </div>
          </div>
          <div className="about-me-desktop-icon-wrapper">
            <img src={icon} alt="" className="about-me-desktop-icon" />
            <p onClick={() => window.open(linkPath)}>{iconText}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
