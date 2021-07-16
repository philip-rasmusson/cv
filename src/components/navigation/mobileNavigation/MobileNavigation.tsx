import './MobileNavigation.css'
import '../../../shared/global/css/Global.css'
import { useState } from "react"
import { MenuItems } from "../MenuItems"

export const MobileNavigation = () => {

  const [burgerIcon, setBurgerIcon] = useState<string>('burger')
  const [menuTrans, setMenuTrans] = useState<any>('-20vw')

  const burgerAnimation = (input: string) => {

    return `${burgerIcon}-icon-${input}`
  }

  const menuSlideIn = () => {
    return burgerIcon === 'burger' ? { right: '-100vw' } : { right: '0' }
  }


  const displayBurgerIcon = () => {
    burgerIcon === 'burger' ? setBurgerIcon('times') : setBurgerIcon('burger')
  }


  return (
    <div>
      <div className='navbar-mobile-wrapper'>
        <div className='navbar-mobile-wrapper-inner font-black'>
          <div className='navbar-mobile-logo'></div>
          <div className={burgerAnimation('wrapper')} onClick={() => displayBurgerIcon()}>
            <div className={burgerAnimation('line-1')}></div>
            <div className={burgerAnimation('line-2')}></div>
            <div className={burgerAnimation('line-3')}></div>
          </div>
          <div className='navbar-mobile-menu-wrapper' style={menuSlideIn()}>
            {MenuItems()}
          </div>
        </div>
      </div>
    </div>
  )
}
