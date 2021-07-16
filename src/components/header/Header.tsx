import { HeaderDesktop } from "./headerDesktop/HeaderDesktop"
import { HeaderMobile } from "./headerMobile/HeaderMobile"

import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import DesktopMobileBreakpoint from '../../data/DesktopMobileBreakpoint'



export const Header = () => {
  const { width } = useWindowDimensions()

  const toggleDesktopOrMobileViewForDesktop = () => {
    return width <= DesktopMobileBreakpoint ? <HeaderMobile /> : <HeaderDesktop />
  }

  return <div>{toggleDesktopOrMobileViewForDesktop()}</div>
}
