import './EducationMobile.css'
import { useState } from 'react'
import { EducationWorklifeData } from '../category/data/EducationWorklife-data'



export const EducationMobile = () => {

  const [showGrades, setShowGrades] = useState('none')
  const [gradesLink, setGradesLink] = useState('Klicka här för att se kurser och betyg')

  const toggleGrades = () => {
    showGrades === 'none'
      ? setShowGrades('grid')
      : setShowGrades('none')
    toggleGradesLink()
  }
  const toggleGradesLink = () => {
    showGrades === 'none'
      ? setGradesLink('Klicka här för att dölja kurser och betyg')
      : setGradesLink('Klicka här för att se kurser och betyg')
  }

  return (

    <div className="page-wrapper">
      <div className="mobile-wrapper">
        <div className="education-worklife-mobile-wrapper">
          <div className="education-worklife-mobile-worklife-wrapper">
            <h2 className="education-worklife-mobile-worklife-title font-upper">arbetsliv</h2>
            <div className="education-worklife-mobile-category-wrapper">
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
          <div className="education-worklife-mobile-education-wrapper">
            <h2 className="education-worklife-mobile-education-title font-upper">utbildning</h2>
            <div className="education-worklife-mobile-category-wrapper">
              <div>
                <h3>{EducationWorklifeData.campusMolndalTitle}</h3>
                <h4>{EducationWorklifeData.campusMolndalYears}</h4>
                <p>{EducationWorklifeData.campusMolndalText}</p>
                <p className="education-worklife-mobile-category-grades-link" onClick={() => toggleGrades()}>
                  {gradesLink}
                </p>
                <div className="education-worklife-mobile-category-grades-wrapper" style={{ display: showGrades }}>
                  <p className="course1-mobile">Objektorienterad programmering i C#</p>
                  <p className="grade1-mobile">VG</p>
                  <p className="course2-mobile">Objektorienterad arkitektur i C#</p>
                  <p className="grade2-mobile">VG</p>
                  <p className="course3-mobile">Kvalitetssäkring och testdriven utveckling i C#</p>
                  <p className="grade3-mobile">VG</p>
                  <p className="course4-mobile">Personlig- och professionell utveckling</p>
                  <p className="grade4-mobile">VG</p>
                  <p className="course5-mobile">Webbramverk ReacjJS</p>
                  <p className="grade5-mobile">VG</p>
                  <p className="course6-mobile">Agil mjukvaruutveckling/Scrum</p>
                  <p className="grade6-mobile">VG</p>
                </div>
              </div>
              <div>
                <h3>{EducationWorklifeData.studioblueTitle}</h3>
                <h4>{EducationWorklifeData.studioblueYears}</h4>
                <p>{EducationWorklifeData.studioblueText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
