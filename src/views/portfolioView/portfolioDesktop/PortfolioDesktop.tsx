import './PortfolioDesktop.css'
import { PortfolioData } from '../data/Portfolio-data'
import { SelectLanguage } from '../../../components/SelectLanguage'

export const PortfolioDesktop = () => {


  return (
    <div className="page-wrapper">
      <div className="desktop-wrapper">
        <div className="portfolio-desktop-wrapper">
          <h1 className="portfolio-desktop-title">
            <SelectLanguage
              textEng={PortfolioData.titleEng}
              textSwe={PortfolioData.title}
            />
          </h1>
          <div>
            <h3>{PortfolioData.etologTitle}</h3>
            <p>
              <SelectLanguage
                textEng={PortfolioData.etologDescEng}
                textSwe={PortfolioData.etologDesc}
              />
            </p>
            <p onClick={() => window.open('https://etolog.se/')} className="portfolio-link"><SelectLanguage
              textEng={PortfolioData.linkTextEng}
              textSwe={PortfolioData.linkText}
            /></p>
          </div>
          <div>
            <h3>{PortfolioData.everyaspectTitle}</h3>
            <p>
              <SelectLanguage
                textEng={PortfolioData.everyaspectDescEng}
                textSwe={PortfolioData.everyaspectDesc}
              />
            </p>
          </div>
          <div>
            <h3>{PortfolioData.codicNinjaTitle}</h3>
            <p>
              <SelectLanguage
                textEng={PortfolioData.codicNinjaDescEng}
                textSwe={PortfolioData.codicNinjaDesc}
              />
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
