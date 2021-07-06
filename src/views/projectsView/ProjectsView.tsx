import { ProjectsDesktop } from './projectsDesktop/ProjectsDesktop'
import { ProjectsMobile } from './projectsMobile/ProjectsMobile'

import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import DesktopMobileBreakpoint from "../../data/DesktopMobileBreakpoint"

export const ProjectsView = () => {
  const { width } = useWindowDimensions()
  const toggleDesktopOrMobileViewForNavbar = () => {
    return width <= DesktopMobileBreakpoint ? <ProjectsMobile /> : <ProjectsDesktop />
  }
  return <div>{toggleDesktopOrMobileViewForNavbar()}</div>
}


