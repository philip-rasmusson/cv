import './EducationMobile.css'
import { useState, useEffect } from 'react'
import { EducationWorklifeData } from '../category/data/EducationWorklife-data'
import { SelectLanguage } from '../../../components/SelectLanguage'
import { useContext } from 'react'
import { LanguageContext } from '../../../shared/provider/LanguageProvider'



export const EducationMobile = () => {

  const [showGrades, setShowGrades] = useState('none')
  const [language] = useContext(LanguageContext)


  const toggleGrades = () => {
    showGrades === 'none'
      ? setShowGrades('grid')
      : setShowGrades('none')
  }

  useEffect(() => {
  }, [language])
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

              {/* Esoft */}
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

              {/* Frilans */}
              <div>
                <h3><SelectLanguage
                  textEng={EducationWorklifeData.frilansTitleMobileEng}
                  textSwe={EducationWorklifeData.frilansTitleMobile}
                /></h3>
                <h4><SelectLanguage
                  textEng={EducationWorklifeData.frilansDescEng}
                  textSwe={EducationWorklifeData.frilansDesc}
                /></h4>
                <h4>{EducationWorklifeData.frilansYears}</h4>
                <ul>
                  <li><SelectLanguage
                    textEng={EducationWorklifeData.frilansLi1Eng}
                    textSwe={EducationWorklifeData.frilansLi1}
                  /></li>
                  <li><SelectLanguage
                    textEng={EducationWorklifeData.frilansLi2Eng}
                    textSwe={EducationWorklifeData.frilansLi2}
                  /></li>

                </ul>
              </div>

              {/* Casino Cosmopol */}
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

              {/* Mattknuten */}
              <div>
                <h3>{EducationWorklifeData.mattknutenTitleMobile}</h3>
                <h4><SelectLanguage
                  textEng={EducationWorklifeData.mattknutenDescEng}
                  textSwe={EducationWorklifeData.mattknutenDesc}
                /></h4>
                <h4>{EducationWorklifeData.mattknutenYears}</h4>
                <ul>
                  <li><SelectLanguage
                    textEng={EducationWorklifeData.mattknutenLi1Eng}
                    textSwe={EducationWorklifeData.mattknutenLi1}
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
                  <SelectLanguage
                    textEng={EducationWorklifeData.gradesLinkEng}
                    textSwe={EducationWorklifeData.gradesLink} />
                </p>
                <div className="education-worklife-mobile-category-grades-wrapper" style={{ display: showGrades }}>
                  <p className="course1-desktop"><SelectLanguage
                    textEng={EducationWorklifeData.course1Eng}
                    textSwe={EducationWorklifeData.course1}
                  /></p>
                  <p className="grade1-desktop">{EducationWorklifeData.gradeVGmobile}</p>
                  <p className="course2-desktop"><SelectLanguage
                    textEng={EducationWorklifeData.course2Eng}
                    textSwe={EducationWorklifeData.course2}
                  /></p>
                  <p className="grade2-desktop">{EducationWorklifeData.gradeVGmobile}</p>
                  <p className="course3-desktop"><SelectLanguage
                    textEng={EducationWorklifeData.course3Eng}
                    textSwe={EducationWorklifeData.course3}
                  /></p>
                  <p className="grade3-desktop">{EducationWorklifeData.gradeVGmobile}</p>
                  <p className="course4-desktop"><SelectLanguage
                    textEng={EducationWorklifeData.course4Eng}
                    textSwe={EducationWorklifeData.course4}
                  /></p>
                  <p className="grade4-desktop">{EducationWorklifeData.gradeVGmobile}</p>
                  <p className="course5-desktop"><SelectLanguage
                    textEng={EducationWorklifeData.course5Eng}
                    textSwe={EducationWorklifeData.course5}
                  /></p>
                  <p className="grade5-desktop">{EducationWorklifeData.gradeVGmobile}</p>
                  <p className="course6-desktop"><SelectLanguage
                    textEng={EducationWorklifeData.course6Eng}
                    textSwe={EducationWorklifeData.course6}
                  /></p>
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
              <div>
                <h3>{EducationWorklifeData.nosnasTitle}</h3>
                <h4>{EducationWorklifeData.nosnasYears}</h4>
                <p><SelectLanguage
                  textEng={EducationWorklifeData.nosnasTextEng}
                  textSwe={EducationWorklifeData.nosnasText}
                /></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
