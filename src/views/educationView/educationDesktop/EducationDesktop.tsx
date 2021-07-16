import './EducationDesktop.css'
import { Category } from '../category/Category'
import { EducationWorklifeData } from '../category/data/EducationWorklife-data'

export const EducationDesktop = () => {

  return (

    <div className="page-wrapper">
      <div className="desktop-wrapper">
        <div className="education-worklife-desktop-wrapper">
          <div className="education-worklife-desktop-education-wrapper">
            <h2 className="font-upper">utbildning</h2>
            <div className="education-worklife-desktop-category-wrapper">
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
          <div className="education-worklife-desktop-worklife-wrapper">
            <h2 className="font-upper">arbetslivserfarenhet</h2>
            <div className="education-worklife-desktop-category-wrapper">
              <div>
                <Category
                  title={EducationWorklifeData.esoftTitle}
                  desc={EducationWorklifeData.esoftDesc}
                  year={EducationWorklifeData.esoftYears}
                  li1={EducationWorklifeData.esoftLi1}
                  li2={EducationWorklifeData.esoftLi2}
                  li3={EducationWorklifeData.esoftLi3}
                  education={false} />
              </div>
              <div>
                <Category
                  title={EducationWorklifeData.casinoCosmopolTitle}
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
