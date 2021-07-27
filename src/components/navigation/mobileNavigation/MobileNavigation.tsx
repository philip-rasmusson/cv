import './MobileNavigation.css'
import '../../../shared/global/css/Global.css'
import { useState } from "react"
import { useHistory } from 'react-router'
import { menuItemsEnglish } from '../../../data/MenuItemsEnglish'
import RoutingPath from '../../../routes/RoutingPath'
import { SelectLanguage } from '../../SelectLanguage'

export const MobileNavigation = () => {
  const history = useHistory()

  const [displayNavbar, setDisplayNavbar] = useState<any>('navbar-mobile-menu-wrapper')
  const [burgerMenu, setBurgerMenu] = useState<any>('burger')

  const showNavbar = () => {
    displayNavbar === 'navbar-mobile-menu-wrapper'
      ? setDisplayNavbar('navbar-mobile-menu-wrapper-active')
      : setDisplayNavbar('navbar-mobile-menu-wrapper')
    toggleBurgerIcon()
  }
  const toggleBurgerIcon = () => {
    displayNavbar === 'navbar-mobile-menu-wrapper'
      ? setBurgerMenu('burger-active')
      : setBurgerMenu('burger')
  }

  const menuLink = (link: any) => {
    history.push(link)
    setDisplayNavbar('navbar-mobile-menu-wrapper')
    setBurgerMenu('burger')
  }

  return (
    <>
      <div className={burgerMenu} onClick={() => showNavbar()}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className={displayNavbar}>
        <ul className='menu-items'>
          <li onClick={() => menuLink(RoutingPath.aboutMeView)}><SelectLanguage textEng={menuItemsEnglish.aboutMeEng} textSwe={menuItemsEnglish.aboutMe} /></li>
          <li onClick={() => menuLink(RoutingPath.portfoliView)}>{menuItemsEnglish.portfolio}</li>
          <li onClick={() => menuLink(RoutingPath.educationView)}><SelectLanguage textEng={menuItemsEnglish.educationWorklifeEng} textSwe={menuItemsEnglish.educationWorklife} /></li>
        </ul>
      </div>
    </>
  )
}

    // <>
    //   <div className='navbar-mobile-wrapper'>
    //     {MenuItems()}
    //   </div>
    // </>