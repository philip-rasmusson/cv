import './HomeViewDesktop.css'
import { useHistory } from 'react-router'
import { useContext } from 'react'
import { LanguageContext } from '../../../shared/provider/LanguageProvider'
import LocalStorage from '../../../shared/cache/LocalStorage'
import RoutingPath from '../../../routes/RoutingPath'

export const HomeViewDesktop = () => {

  const [language, setLanguage] = useContext(LanguageContext)
  const history = useHistory<any>()

  const selectLanguage = (language: string) => {
    setLanguage(language)
    // localStorage.setItem(LocalStorage.language, c)
    history.push(RoutingPath.aboutMeView)
  }


  return (
    <div className="page-wrapper">
      <div className="desktop-wrapper">
        <h1 onClick={() => setLanguage('swedish')}>swedish</h1>
        <h1 onClick={() => setLanguage('english')}>english</h1>
      </div>
    </div>
  )
}
