import './PortfolioDesktop.css'

export const PortfolioDesktop = () => {
  return (
    <div className="page-wrapper">
      <div className="desktop-wrapper">
        <div className="portfolio-desktop-wrapper">
          <h1 className="portfolio-desktop-title">
            Portfolio
          </h1>
          <div className="portfolio-desktop-wrapper"></div>
          <div className="portfolio-desktop-div-1">
            <h3>ETOLOG.SE</h3>
            <p>Designade och byggde på egen hand en webbapplikation i ReactJS, MongoDB och NodeJS, med versionhantering via Github.Backend styrs av en adminpanel med inlogg där man kan lägga till, ta bort och redigera etologer.</p>
          </div>
          <div className="portfolio-desktop-div-2">
            <h3>COFFEE MOCK-UP</h3>
            <p>En egendesignad, fullt responsiv webbsida som jag främst använder för att testa funktioner och tricks i HTML, CSS och JavaScript. Uppdateras kontinuerligt.</p>
          </div>
          <div className="portfolio-desktop-div-3">
            <h3>FOTO</h3>
            <p>Ett urval av fotografier jag har tagit under min tid som yrkesfotograf</p>
          </div>
          <div className="portfolio-desktop-div-4">
            <h3>KONSTVERK</h3>
            <p>Ett urval av tavlor och illustrationer som jag har gjort.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
