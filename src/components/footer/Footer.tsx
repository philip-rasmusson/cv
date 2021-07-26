import './Footer.css'
import { useState, useContext } from 'react'
import { GlobalContext } from '../../shared/provider/GlobalProvider'

export const Footer = () => {
  const [globalValue, setGlobalValue] = useContext(GlobalContext)

  const checkLanguage = () => {
    return globalValue === 'english'
      ? <><span>svenska</span>  / <span style={{ textDecoration: 'underline' }}>english</span></>
      : <><span style={{ textDecoration: 'underline' }}>svenska</span>  / <span>english</span></>
  }
  return (
    <div className="footer-wrapper">
      <h3>
        {checkLanguage()}
      </h3>
    </div>
  )
}
