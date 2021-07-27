import { useHistory } from 'react-router-dom'

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

  const checkLanguage = () => {
    if (language === 'english') {
      setAboutMe(menuItemsEnglish.aboutMeEng)
      setEducation(menuItemsEnglish.educationWorklifeEng)
    } else {
      setAboutMe(menuItemsEnglish.aboutMe)
      setEducation(menuItemsEnglish.educationWorklife)

    }
  }

  useEffect(() => {
    checkLanguage()
  }, [language])

  const history = useHistory()
  return (
    <>
      <ul className='menu-items'>
        <li>
          <MenuItem
            link={RoutingPath.aboutMeView}
            title={aboutMe}
          />
        </li>
        <li>
          <MenuItem
            link={RoutingPath.portfoliView}
            title={menuItemsEnglish.portfolio}
          />
        </li>
        <li>
          <MenuItem
            link={RoutingPath.educationView}
            title={education}
          />
        </li>
      </ul>
    </>
  )
}
