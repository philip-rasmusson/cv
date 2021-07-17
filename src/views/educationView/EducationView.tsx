import { EducationDesktop } from './educationDesktop/EducationDesktop'
import { EducationMobile } from './educationMobile/EducationMobile'

import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import DesktopMobileBreakpoint from "../../data/DesktopMobileBreakpoint"


export const EducationView = () => {
  const { width } = useWindowDimensions()
  const toggleDesktopOrMobileViewForNavbar = () => {
    return width <= DesktopMobileBreakpoint ? < EducationMobile /> : <EducationDesktop />
  }
  return <>{toggleDesktopOrMobileViewForNavbar()}</>
}