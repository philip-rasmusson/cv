import './AboutMeDesktop.css'
import headerImg from '../../../shared/img/IMG_0085.png'
import { AboutMeDataEnglish } from '../data/AboutMeDataEnglish'

export const AboutMeDesktop = () => {
  return (
    <div className="page-wrapper">
      <div className="desktop-wrapper">
        <div className="aboutme-desktop-wrapper">
          <h3>
            <h2>{AboutMeDataEnglish.hej}</h2> <br />
            {AboutMeDataEnglish.omMig}<br /><br />
            {AboutMeDataEnglish.omMig2}
          </h3>
          <img src={headerImg} alt="Profile picture" />
          <div className="about-me-desktop-competence-wrapper">
            <h3>huvudsakliga kompetenser</h3>
            <div className="about-me-desktop-competence-wrapper-items">

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
    </div>
  )
}
