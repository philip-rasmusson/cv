import { AboutMeDesktop } from "./aboutMeDesktop/AboutMeDesktop"
import { AboutMeMobile } from "./aboutMeMobile/AboutMeMobile"

import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import DesktopMobileBreakpoint from "../../data/DesktopMobileBreakpoint"


export const AboutMeView = () => {
  const { width } = useWindowDimensions()

  const toggleDesktopOrMobileViewForNavbar = () => {
    return width <= DesktopMobileBreakpoint ? <AboutMeMobile /> : <AboutMeDesktop />
  }

  return <>{toggleDesktopOrMobileViewForNavbar()}</>
}
