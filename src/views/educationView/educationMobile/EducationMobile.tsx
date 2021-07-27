import './EducationMobile.css'
import { useState } from 'react'
import { EducationWorklifeData } from '../category/data/EducationWorklife-data'
import { SelectLanguage } from '../../../components/SelectLanguage'



export const EducationMobile = () => {

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
        <div className="education-worklife-mobile-wrapper">
          <div className="education-worklife-mobile-worklife-wrapper">
            <h2 className="education-worklife-mobile-worklife-title font-upper"> <SelectLanguage
              textEng={EducationWorklifeData.arbetslivEng}
              textSwe={EducationWorklifeData.arbetsliv}
            /></h2>
            <div className="education-worklife-mobile-category-wrapper">
              <div>
                <h3>{EducationWorklifeData.esoftTitleMobile}</h3>
                <h4><SelectLanguage
                  textEng={EducationWorklifeData.esoftDescEng}
                  textSwe={EducationWorklifeData.esoftDesc}
                /></h4>
                <h4>{EducationWorklifeData.esoftYears}</h4>
                <ul>
                  <li><SelectLanguage
                    textEng={EducationWorklifeData.esoftLi1Eng}
                    textSwe={EducationWorklifeData.esoftLi1}
                  /></li>
                  <li><SelectLanguage
                    textEng={EducationWorklifeData.esoftLi2Eng}
                    textSwe={EducationWorklifeData.esoftLi2}
                  /></li>
                  <li><SelectLanguage
                    textEng={EducationWorklifeData.esoftLi3Eng}
                    textSwe={EducationWorklifeData.esoftLi3}
                  /></li>

                </ul>
              </div>
              <div>
                <h3>{EducationWorklifeData.casinoCosmopolTitleMobile}</h3>
                <h4>{EducationWorklifeData.casinoCosmopolDesc}</h4>
                <h4>{EducationWorklifeData.casinoCosmopolYears}</h4>
                <ul>
                  <li><SelectLanguage
                    textEng={EducationWorklifeData.casinoCosmopolLi1Eng}
                    textSwe={EducationWorklifeData.casinoCosmopolLi1}
                  /></li>
                  <li><SelectLanguage
                    textEng={EducationWorklifeData.casinoCosmopolLi2Eng}
                    textSwe={EducationWorklifeData.casinoCosmopolLi2}
                  /></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="education-worklife-mobile-education-wrapper">
            <h2 className="education-worklife-mobile-education-title font-upper"><SelectLanguage
              textEng={EducationWorklifeData.utbildningEng}
              textSwe={EducationWorklifeData.utbildning}
            /></h2>
            <div className="education-worklife-mobile-category-wrapper">
              <div>
                <h3>{EducationWorklifeData.campusMolndalTitle}</h3>
                <h4><SelectLanguage
                  textEng={EducationWorklifeData.campusMolndalYearsEng}
                  textSwe={EducationWorklifeData.campusMolndalYears}
                /></h4>
                <p><SelectLanguage
                  textEng={EducationWorklifeData.campusMolndalTextEng}
                  textSwe={EducationWorklifeData.campusMolndalText}
                /></p>
                <p className="education-worklife-mobile-category-grades-link" onClick={() => toggleGrades()}>
                  {gradesLink}
                </p>
                <div className="education-worklife-mobile-category-grades-wrapper" style={{ display: showGrades }}>
                  <p className="course1-desktop">{EducationWorklifeData.course1}</p>
                  <p className="grade1-desktop">{EducationWorklifeData.gradeVGmobile}</p>
                  <p className="course2-desktop">{EducationWorklifeData.course2}</p>
                  <p className="grade2-desktop">{EducationWorklifeData.gradeVGmobile}</p>
                  <p className="course3-desktop">{EducationWorklifeData.course3}</p>
                  <p className="grade3-desktop">{EducationWorklifeData.gradeVGmobile}</p>
                  <p className="course4-desktop">P{EducationWorklifeData.course4}</p>
                  <p className="grade4-desktop">{EducationWorklifeData.gradeVGmobile}</p>
                  <p className="course5-desktop">{EducationWorklifeData.course5}</p>
                  <p className="grade5-desktop">{EducationWorklifeData.gradeVGmobile}</p>
                  <p className="course6-desktop">{EducationWorklifeData.course6}</p>
                  <p className="grade6-desktop">{EducationWorklifeData.gradeVGmobile}</p>
                </div>
              </div>
              <div>
                <h3>{EducationWorklifeData.studioblueTitle}</h3>
                <h4>{EducationWorklifeData.studioblueYears}</h4>
                <p><SelectLanguage
                  textEng={EducationWorklifeData.studioblueTextEng}
                  textSwe={EducationWorklifeData.studioblueText}
                /></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
