import './AboutMeMobile.css'
import headerImg from '../../../shared/img/IMG_0085.png'
import { AboutMeDataEnglish } from '../data/AboutMeDataEnglish'

export const AboutMeMobile = () => {
  return (
    <>
      {/* <div className="page-wrapper-mobile"> */}
      <div className="mobile-wrapper">
        <div className="aboutme-mobile-wrapper">
          <h1>Hej!</h1>
          <h3>
            {AboutMeDataEnglish.omMig}<br /><br />
            {AboutMeDataEnglish.omMig2}
          </h3>
          <img src={headerImg} alt="Profile picture" />
          <div className="about-me-mobile-competence-wrapper">
            <h3>huvudsakliga kompetenser</h3>
            <div className="about-me-mobile-competence-wrapper-items">

              <p>HTML/CSS</p>
              <p>JavaScript</p>
              <p>ReactJS</p>
              <p>NodeJS</p>
              <p>C# / .NET</p>
              <p>Entity</p>
              <p>SQL</p>
              <p>MongoDB</p>
              <p>Git</p>
              <p>Scrum</p>
              <p>Webdesign</p>
              <p>Adobe CC</p>
              <p>Svenska </p>
              <p>Engelska</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
