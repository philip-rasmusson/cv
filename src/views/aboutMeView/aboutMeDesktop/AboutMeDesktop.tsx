import './AboutMeDesktop.css'
import headerImg from '../../../shared/img/IMG_0085.png'
import { AboutMeDataEnglish } from '../data/AboutMeDataEnglish'
import javascript from '../../../shared/img/icons/javascript.png'
import css from '../../../shared/img/icons/css.png'
import react from '../../../shared/img/icons/react.png'
import nodejs from '../../../shared/img/icons/nodejs.png'
import csharp from '../../../shared/img/icons/csharp.png'
import entity from '../../../shared/img/icons/entity.png'
import sql from '../../../shared/img/icons/sql.png'
import mongodb from '../../../shared/img/icons/mongodb.png'
import git from '../../../shared/img/icons/git.png'
import scrum from '../../../shared/img/icons/scrum.png'
import webdesign from '../../../shared/img/icons/webdesign.png'
import adobe from '../../../shared/img/icons/adobe.png'
import swedish from '../../../shared/img/icons/swedish.png'
import english from '../../../shared/img/icons/english.png'

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

              <div>
                <img src={css} alt="HTML/CSS" />
                <p>HTML/CSS</p>
              </div>
              <div>
                <img src={javascript} alt="Javascript" />
                <p>JavaScript</p>
              </div>
              <div>
                <img src={react} alt="ReactJS" />
                <p>ReactJS</p>
              </div>
              <div>
                <img src={nodejs} alt="NodeJS" />
                <p>NodeJS</p>
              </div>
              <div>
                <img src={csharp} alt="C#/.NET" />
                <p>C# / .NET</p>
              </div>
              <div>
                <img src={entity} alt="Entity Framework" />
                <p>Entity</p>
              </div>
              <div>
                <img src={sql} alt="SQL" />
                <p>SQL</p>
              </div>
              <div>
                <img src={mongodb} alt="MongoDB" />
                <p>MongoDB</p>
              </div>
              <div>
                <img src={git} alt="Git" />
                <p>Git</p>
              </div>
              <div>
                <img src={scrum} alt="Scrum" />
                <p>Scrum</p>
              </div>
              <div>
                <img src={webdesign} alt="Webbdesign" />
                <p>Webdesign</p>
              </div>
              <div>
                <img src={adobe} alt="Adobe CC" />
                <p>Adobe CC</p>
              </div>
              <div>
                <img src={swedish} alt="Swedish" />
                <p>Svenska </p>
              </div>
              <div>
                <img src={english} alt="English" />
                <p>Engelska</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
