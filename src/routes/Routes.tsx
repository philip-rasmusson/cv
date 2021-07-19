import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AboutMeView } from '../views/aboutMeView/AboutMeView'
import { CompetenceView } from '../views/competenceView/CompetenceView'
import { EducationView } from "../views/educationView/EducationView"
import { PortfolioView } from "../views/portfolioView/PortfolioView"
import { WorklifeView } from "../views/worklifeView/WorklifeView"
import { HomeView } from '../views/homeView/HomeView'
import RoutingPath from './RoutingPath'
import { Header } from '../components/header/Header'
import { Footer } from "../components/footer/Footer"
import { HomeViewDesktop } from '../views/homeView/homeViewDesktop/HomeViewDesktop'

export const Routes = (props: { children?: React.ReactChild }) => {

  return (
    <Router>
      {props.children}
      <div className='wrapper'>
        <Header />
        <Switch>
          <Route exact path={RoutingPath.homeView} component={HomeView} />
          <Route exact path={RoutingPath.aboutMeView} component={AboutMeView} />
          <Route exact path={RoutingPath.competenceView} component={CompetenceView} />
          <Route exact path={RoutingPath.educationView} component={EducationView} />
          <Route exact path={RoutingPath.portfoliView} component={PortfolioView} />
          <Route exact path={RoutingPath.worklifeView} component={WorklifeView} />
        </Switch>
        <Footer />
      </div >
    </Router>
  )
}
