import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AboutMeView } from '../views/aboutMeView/AboutMeView'
import { EducationView } from "../views/educationView/EducationView"
import { PortfolioView } from "../views/portfolioView/PortfolioView"
import RoutingPath from './RoutingPath'
import { Header } from '../components/header/Header'
import { Footer } from "../components/footer/Footer"

export const Routes = (props: { children?: React.ReactChild }) => {

  return (
    <Router>
      {props.children}
      <div className='wrapper'>
        <Header />
        <Switch>
          <Route exact path={RoutingPath.aboutMeView} component={AboutMeView} />
          <Route exact path={RoutingPath.educationView} component={EducationView} />
          <Route exact path={RoutingPath.portfoliView} component={PortfolioView} />
        </Switch>
        <Footer />
      </div >
    </Router>
  )
}
