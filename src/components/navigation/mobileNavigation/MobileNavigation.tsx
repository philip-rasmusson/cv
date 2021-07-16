import './MobileNavigation.css'
import '../../../shared/global/css/Global.css'
import { useState } from "react"
import { MenuItems } from "../MenuItems"

export const MobileNavigation = () => {


  return (
    <div>
      <div className='navbar-mobile-wrapper hidden'>
        {MenuItems()}
      </div>
    </div>
  )
}

        // <div className='navbar-mobile-wrapper-inner font-black'>
        //   <div className='navbar-mobile-logo'></div>
        //   <div className={burgerAnimation('wrapper')} onClick={() => displayBurgerIcon()}>
        //     <div className={burgerAnimation('line-1')}></div>
        //     <div className={burgerAnimation('line-2')}></div>
        //     <div className={burgerAnimation('line-3')}></div>
        //   </div>
        //   <div className='navbar-mobile-menu-wrapper' style={menuSlideIn()}>
        //     {MenuItems()}
        //   </div>
        // </div>