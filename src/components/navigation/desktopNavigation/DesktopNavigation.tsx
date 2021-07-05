import { MenuItems } from '../MenuItems'
import './DesktopNavigation.css'

export const DesktopNavigation = () => {
  return (
    <div>
      <nav className="desktop-navbar">
        {MenuItems()}
      </nav>
    </div>
  )
}
