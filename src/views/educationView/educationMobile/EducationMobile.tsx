import './EducationMobile.css'
import { Category } from '../category/Category'
import { EducationWorklifeData } from '../category/data/EducationWorklife-data'



export const EducationMobile = () => {

  return (

    <div className="page-wrapper">
      <div className="mobile-wrapper">
        <div className="education-worklife-mobile-wrapper">
          <div className="education-worklife-mobile-education-wrapper">
            <h2 className="education-worklife-mobile-education-title font-upper">utbildning</h2>
            <div className="education-worklife-mobile-category-wrapper">
              <div>
                <Category
                  title={EducationWorklifeData.campusMolndalTitle}
                  year={EducationWorklifeData.campusMolndalYears}
                  text={EducationWorklifeData.campusMolndalText}
                  education={true} />
              </div>
              <div>
                <Category
                  title={EducationWorklifeData.studioblueTitle}
                  year={EducationWorklifeData.studioblueYears}
                  text={EducationWorklifeData.studioblueText}
                  education={true} />
              </div>
            </div>
          </div>
          <div className="education-worklife-mobile-worklife-wrapper">
            <h2 className="education-worklife-mobile-worklife-title font-upper">arbetsliv</h2>
            <div className="education-worklife-mobile-category-wrapper">
              <div>
                <Category
                  title={EducationWorklifeData.esoftTitleMobile}
                  desc={EducationWorklifeData.esoftDesc}
                  year={EducationWorklifeData.esoftYears}
                  li1={EducationWorklifeData.esoftLi1}
                  li2={EducationWorklifeData.esoftLi2}
                  li3={EducationWorklifeData.esoftLi3}
                  education={false} />
              </div>
              <div>
                <Category
                  title={EducationWorklifeData.casinoCosmopolTitleMobile}
                  desc={EducationWorklifeData.casinoCosmopolDesc}
                  year={EducationWorklifeData.casinoCosmopolYears}
                  li1={EducationWorklifeData.casinoCosmopolLi1}
                  li2={EducationWorklifeData.casinoCosmopolLi2}
                  li3={EducationWorklifeData.casinoCosmopolLi3}
                  education={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
