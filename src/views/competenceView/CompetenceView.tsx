import { CompetenceDesktop } from "./competenceDesktop/CompetenceDesktop"
import { CompetenceMobile } from './competenceMobile/CompetenceMobile'

import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import DesktopMobileBreakpoint from "../../data/DesktopMobileBreakpoint"


export const CompetenceView = () => {
  const { width } = useWindowDimensions()
  const toggleDesktopOrMobileViewForNavbar = () => {
    return width <= DesktopMobileBreakpoint ? <CompetenceMobile /> : <CompetenceDesktop />
  }
  return <>{toggleDesktopOrMobileViewForNavbar()}</>
}