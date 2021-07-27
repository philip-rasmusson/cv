import './HeaderDesktop.css'
import headerImg from '../../../shared/img/IMG_0085.png'
import { HeaderData } from '../data/Header-data'
import { useContext, useState } from 'react'
import { useEffect } from 'react'
import { LanguageContext } from '../../../shared/provider/LanguageProvider'
import { SocialMediaIcons } from "../../socialMedia/SocialMediaIcons"


export const HeaderDesktop = () => {

  const [language, setsetLanguage] = useContext(LanguageContext)
  const [title, setTitle] = useState<any>()
  const [desc, setDesc] = useState<any>()

  const checkLanguage = () => {
    language === 'english'
      ? selectLanguageEnglish()
      : selectLanguageSwedish()
  }

  const selectLanguageEnglish = () => {
    setDesc(HeaderData.titleDescEng)
  }

  const selectLanguageSwedish = () => {
    setDesc(HeaderData.titleDesc)
  }

  useEffect(() => {
    checkLanguage()
  }, [language])

  return (
    <div className="header">
      <div className="main-line"></div>
      <div className="title-wrapper">
        <h1 className="title-name font-upper">{HeaderData.titleName}</h1>
        <h3 className="title-desc font-upper">{desc}</h3>
      </div>
      <div className="title-img">
        <img src={headerImg} alt="Profile picture" />
      </div>
      <div className="social-media-wrapper">
        {SocialMediaIcons()}
      </div>
    </div>
  )
}
