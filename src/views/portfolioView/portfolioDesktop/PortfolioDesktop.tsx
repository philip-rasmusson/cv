import './PortfolioDesktop.css'
// import { useHistory } from 'react-router'
// import RoutingPath from '../../../routes/RoutingPath'
import { PortfolioData } from '../data/Portfolio-data'
import { useState, useContext, useEffect } from 'react'
import { LanguageContext } from '../../../shared/provider/LanguageProvider'

export const PortfolioDesktop = () => {

  const [language] = useContext(LanguageContext)

  const [etologDesc, setEtologDesc] = useState<string>('')

  // const history = useHistory()

  const checkLanguage = () => {
    language === 'english' ? setEtologDesc('Nu blommar asfalten') : setEtologDesc(PortfolioData.etologDesc)
  }

  useEffect(() => {
    checkLanguage()
  }, [language])

  return (
    <div className="page-wrapper">
      <div className="desktop-wrapper">
        <div className="portfolio-desktop-wrapper">
          <h1 className="portfolio-desktop-title">
            {PortfolioData.title}
          </h1>
          <div onClick={() => window.open('https://etolog.se/')}>
            <h3>{PortfolioData.etologTitle}</h3>
            <p>{etologDesc}</p>
          </div>
          <div onClick={() => window.open('https://philip-rasmusson.github.io/coffee-company/')}>
            <h3>{PortfolioData.coffeeTitle}</h3>
            <p>{PortfolioData.coffeeDesc}</p>
          </div>
          <div onClick={() => window.open('https://www.flickr.com/photos/192429503@N08/albums/72157719573144867')}>
            <h3>{PortfolioData.fotoTitle}</h3>
            <p>{PortfolioData.fotoDesc}</p>
          </div>
          <div onClick={() => window.open('https://www.flickr.com/photos/192429503@N08/albums/72157719560435103')}>
            <h3>{PortfolioData.artTitle}</h3>
            <p>{PortfolioData.artDesc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
