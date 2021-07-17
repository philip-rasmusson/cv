import './MobileNavigation.css'
import '../../../shared/global/css/Global.css'
import { useState } from "react"
import { MenuItems } from "../MenuItems"

export const MobileNavigation = () => {


  const [displayNavbar, setDisplayNavbar] = useState<any>('navbar-mobile-menu-wrapper')
  const showNavbar = () => {
    displayNavbar === 'navbar-mobile-menu-wrapper'
      ? setDisplayNavbar('navbar-mobile-menu-wrapper-active')
      : setDisplayNavbar('navbar-mobile-menu-wrapper')
  }

  return (
    <>
      <div className="burger" onClick={() => showNavbar()}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className={displayNavbar}>
        {MenuItems()}
      </div>
    </>
  )
}

    // <>
    //   <div className='navbar-mobile-wrapper'>
    //     {MenuItems()}
    //   </div>
    // </>