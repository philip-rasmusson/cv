import { WorklifeDesktop } from './worklifeDesktop/WorklifeDesktop'
import { WorklifeMobile } from "./worklifeMobile/WorklifeMobile"

import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import DesktopMobileBreakpoint from "../../data/DesktopMobileBreakpoint"


export const WorklifeView = () => {
  const { width } = useWindowDimensions()
  const toggleDesktopOrMobileViewForNavbar = () => {
    return width <= DesktopMobileBreakpoint ? <WorklifeMobile /> : <WorklifeDesktop />
  }
  return <div>{toggleDesktopOrMobileViewForNavbar()}</div>
}
