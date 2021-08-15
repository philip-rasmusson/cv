import '../../shared/global/css/Global.css'
import RoutingPath from '../../routes/RoutingPath'
import { menuItemsEnglish } from '../../data/MenuItemsEnglish'
import { MenuItem } from './MenuItem'
import { useContext, useState } from 'react'
import { useEffect } from 'react'
import { LanguageContext } from '../../shared/provider/LanguageProvider'

export const MenuItems = () => {
  const [language] = useContext(LanguageContext)
  const [aboutMe, setAboutMe] = useState(menuItemsEnglish.aboutMe)
  const [education, setEducation] = useState(menuItemsEnglish.educationWorklife)
  const [projects, setProjects] = useState(menuItemsEnglish.projects)

  const checkLanguage = () => {
    if (language === 'english') {
      setAboutMe(menuItemsEnglish.aboutMeEng)
      setEducation(menuItemsEnglish.educationWorklifeEng)
      setProjects(menuItemsEnglish.projectsEng)
    } else {
      setAboutMe(menuItemsEnglish.aboutMe)
      setEducation(menuItemsEnglish.educationWorklife)
      setProjects(menuItemsEnglish.projects)
    }
  }

  useEffect(() => {
    checkLanguage()
  }, [language])

  return (
    <>
      <ul className='menu-items'>
        <>
          <MenuItem
            link={RoutingPath.aboutMeView}
            title={aboutMe}
          />
        </>
        <>
          <MenuItem
            link={RoutingPath.portfoliView}
            title={projects}
          />
        </>
        <>
          <MenuItem
            link={RoutingPath.educationView}
            title={education}
          />
        </>
      </ul>
    </>
  )
}
