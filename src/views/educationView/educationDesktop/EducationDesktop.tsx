import './EducationDesktop.css'
import { EducationWorklifeData } from '../category/data/EducationWorklife-data'
import { useState } from 'react'
export const EducationDesktop = () => {

  const [showGrades, setShowGrades] = useState('none')
  const [gradesLink, setGradesLink] = useState(EducationWorklifeData.gradesLinkInitial)

  const toggleGrades = () => {
    showGrades === 'none'
      ? setShowGrades('grid')
      : setShowGrades('none')
    toggleGradesLink()
  }
  const toggleGradesLink = () => {
    showGrades === 'none'
      ? setGradesLink(EducationWorklifeData.gradesLinkSwitched)
      : setGradesLink(EducationWorklifeData.gradesLinkInitial)
  }

  return (

    <div className="page-wrapper">
      <div className="mobile-wrapper">
        <div className="education-worklife-desktop-wrapper">
          <div className="education-worklife-desktop-education-wrapper">
            <h2 className="education-worklife-desktop-education-title font-upper">{EducationWorklifeData.utbildning}</h2>
            <div className="education-worklife-desktop-category-wrapper">
              <div>
                <h3>{EducationWorklifeData.campusMolndalTitle}</h3>
                <h4>{EducationWorklifeData.campusMolndalYears}</h4>
                <p>{EducationWorklifeData.campusMolndalText}</p>
                <p className="education-worklife-desktop-category-grades-link" onClick={() => toggleGrades()}>
                  {gradesLink}
                </p>
                <div className="education-worklife-desktop-category-grades-wrapper" style={{ display: showGrades }}>
                  <p className="course1-desktop">{EducationWorklifeData.course1}</p>
                  <p className="grade1-desktop">{EducationWorklifeData.gradeVG}</p>
                  <p className="course2-desktop">{EducationWorklifeData.course2}</p>
                  <p className="grade2-desktop">{EducationWorklifeData.gradeVG}</p>
                  <p className="course3-desktop">{EducationWorklifeData.course3}</p>
                  <p className="grade3-desktop">{EducationWorklifeData.gradeVG}</p>
                  <p className="course4-desktop">P{EducationWorklifeData.course4}</p>
                  <p className="grade4-desktop">{EducationWorklifeData.gradeVG}</p>
                  <p className="course5-desktop">{EducationWorklifeData.course5}</p>
                  <p className="grade5-desktop">{EducationWorklifeData.gradeVG}</p>
                  <p className="course6-desktop">{EducationWorklifeData.course6}</p>
                  <p className="grade6-desktop">{EducationWorklifeData.gradeVG}</p>
                </div>
              </div>
              <div>
                <h3>{EducationWorklifeData.studioblueTitle}</h3>
                <h4>{EducationWorklifeData.studioblueYears}</h4>
                <p>{EducationWorklifeData.studioblueText}</p>
              </div>
            </div>
          </div>
          <div className="education-worklife-desktop-worklife-wrapper">
            <h2 className="education-worklife-desktop-worklife-title font-upper">{EducationWorklifeData.arbetsliv}</h2>
            <div className="education-worklife-desktop-category-wrapper">
              <div>
                <h3>{EducationWorklifeData.esoftTitleMobile}</h3>
                <h4>{EducationWorklifeData.esoftDesc}</h4>
                <h4>{EducationWorklifeData.esoftYears}</h4>
                <ul>
                  <li>{EducationWorklifeData.esoftLi1}</li>
                  <li>{EducationWorklifeData.esoftLi2}</li>
                  <li>{EducationWorklifeData.esoftLi3}</li>
                </ul>
              </div>
              <div><h3>{EducationWorklifeData.casinoCosmopolTitleMobile}</h3>
                <h4>{EducationWorklifeData.casinoCosmopolDesc}</h4>
                <h4>{EducationWorklifeData.casinoCosmopolYears}</h4>
                <ul>

                  <li>{EducationWorklifeData.casinoCosmopolLi1}</li>
                  <li>{EducationWorklifeData.casinoCosmopolLi2}</li>
                  <li>{EducationWorklifeData.casinoCosmopolLi3}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
