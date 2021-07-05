import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomeView } from '../views/homeView//HomeView'
import { SecondView } from '../views/secondView/SecondView'
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
          <Route exact path={RoutingPath.homeView} component={HomeView} />
          <Route exact path={RoutingPath.secondView} component={SecondView} />
        </Switch>
        <Footer />
      </div >
    </Router>
  )
}
