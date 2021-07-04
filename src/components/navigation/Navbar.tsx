import { DesktopNavigation } from "./desktopNavigation/DesktopNavigation"
import { MobileNavigation } from "./mobileNavigation/MobileNavigation"

import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import DesktopMobileBreakpoint from '../../data/DesktopMobileBreakpoint'


export const Navbar = () => {
  const { width } = useWindowDimensions()

  const toggleDesktopOrMobileViewForNavbar = () => {
    return width <= DesktopMobileBreakpoint ? <MobileNavigation /> : <DesktopNavigation />
  }

  return <div>{toggleDesktopOrMobileViewForNavbar()}</div>
}
