import './AboutMeMobile.css'
import headerImg from '../../../shared/img/IMG_0085.png'
import { AboutMeDataEnglish } from '../data/AboutMeData'
import { SelectLanguage } from '../../../components/SelectLanguage'

export const AboutMeMobile = () => {
  return (
    <>
      {/* <div className="page-wrapper-mobile"> */}
      <div className="mobile-wrapper">
        <div className="aboutme-mobile-wrapper">
          <h1><SelectLanguage
            textEng={AboutMeDataEnglish.hiEng}
            textSwe={AboutMeDataEnglish.hi}
          /></h1>
          <h3>
            <SelectLanguage
              textEng={AboutMeDataEnglish.aboutMeEng}
              textSwe={AboutMeDataEnglish.aboutMe}
            /><br /><br />
            <SelectLanguage
              textEng={AboutMeDataEnglish.aboutMe2Eng}
              textSwe={AboutMeDataEnglish.aboutMe2}
            />
          </h3>
          <img src={headerImg} alt="Profile" />
          <div className="about-me-mobile-competence-wrapper">
            <h3><SelectLanguage
              textEng={AboutMeDataEnglish.mainCompetenceEng}
              textSwe={AboutMeDataEnglish.mainCompetence}
            /></h3>
            <div className="about-me-mobile-competence-wrapper-items">
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
        </div>
      </div>
    </>
  )
}
