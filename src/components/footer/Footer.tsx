import './Footer.css'
import { useState, useContext } from 'react'
import { GlobalContext } from '../../shared/provider/GlobalProvider'

export const Footer = () => {
  const [globalValue, setGlobalValue] = useContext(GlobalContext)

  const toggleLanguage = () => {
    globalValue === 'english'
      ? setGlobalValue('')
      : setGlobalValue('english')
  }

  const checkLanguage = () => {
    return globalValue === 'english'
      ? <><span onClick={() => toggleLanguage()} style={{ cursor: 'pointer' }}>🇸🇪</span>  <span style={{ fontSize: '2rem' }}>🇬🇧</span></>
      : <><span style={{ fontSize: '2rem' }}>🇸🇪</span>   <span onClick={() => toggleLanguage()} style={{ cursor: 'pointer' }}>🇬🇧</span></>
  }
  return (
    <div className="footer-wrapper">
      <h3>
        {checkLanguage()}
      </h3>
    </div>
  )
}
