import './Footer.css'
import { useState, useContext } from 'react'
import { LanguageContext } from '../../shared/provider/LanguageProvider'

export const Footer = () => {
  const [language, setLanguage] = useContext(LanguageContext)

  const toggleLanguage = () => {
    language === 'english'
      ? setLanguage('')
      : setLanguage('english')
  }

  const checkLanguage = () => {
    return language === 'english'
      ? <><span onClick={() => toggleLanguage()} className="footer-icon-inactive">🇸🇪</span>  <span className="footer-icon-active">🇬🇧</span></>
      : <><span className="footer-icon-active">🇸🇪</span>   <span onClick={() => toggleLanguage()} className="footer-icon-inactive">🇬🇧</span></>
  }
  return (
    <div className="footer-wrapper">
      <div>
        {checkLanguage()}
      </div>
      <p className="footer-copyright">Design Philip Rasmusson | 2021 All Rights Reserved</p>
    </div>
  )
}
