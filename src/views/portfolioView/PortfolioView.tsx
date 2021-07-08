import { PortfolioDesktop } from './portfolioDesktop/PortfolioDesktop'
import { PortfolioMobile } from './portfolioMobile/PortfolioMobile'

import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import DesktopMobileBreakpoint from "../../data/DesktopMobileBreakpoint"

export const PortfolioView = () => {
  const { width } = useWindowDimensions()
  const toggleDesktopOrMobileViewForNavbar = () => {
    return width <= DesktopMobileBreakpoint ? <PortfolioMobile /> : <PortfolioDesktop />
  }
  return <div>{toggleDesktopOrMobileViewForNavbar()}</div>
}


