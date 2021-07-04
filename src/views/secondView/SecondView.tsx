// import { HomeViewDesktop } from "./homeViewDesktop/HomeViewDesktop"
import { SecondViewMobile } from "./secondViewMobile/SecondViewMobile"

import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import DesktopMobileBreakpoint from "../../data/DesktopMobileBreakpoint"


export const SecondView = () => {
  const { width } = useWindowDimensions()

  const toggleDesktopOrMobileViewForNavbar = () => {
    return width <= DesktopMobileBreakpoint ? <SecondViewMobile /> : <SecondViewMobile />
  }

  return <div>{toggleDesktopOrMobileViewForNavbar()}</div>
}
