import './HeaderMobile.css'
import { HeaderData } from '../data/Header-data'
// import { useContext, useState } from 'react'
// import { useEffect } from 'react'
// import { LanguageContext } from '../../../shared/provider/LanguageProvider'
import { SocialMediaIcons } from "../../socialMedia/SocialMediaIcons"
import { SelectLanguage } from '../../SelectLanguage'


export const HeaderMobile = () => {
  // const [language, setsetLanguage] = useContext(LanguageContext)
  // const [titleDesc, setTitleDesc] = useState<any>()

  // const checkLanguage = () => {
  //   language === 'english'
  //     ? selectLanguageEnglish()
  //     : selectLanguageSwedish()
  // }

  // const selectLanguageEnglish = () => {
  //   setTitleDesc(HeaderData.titleDescEng)
  // }

  // const selectLanguageSwedish = () => {
  //   setTitleDesc(HeaderData.titleDesc)
  // }

  // useEffect(() => {
  //   checkLanguage()
  // }, [language])
  return (
    <div className="header-mobile">
      <div className="main-line-mobile"></div>
      <div className="title-wrapper-mobile">
        <h1 className="title-name-mobile font-upper">{HeaderData.titleName}</h1>
        <h3 className="title-desc-mobile font-upper"><SelectLanguage textEng={HeaderData.titleDescEng} textSwe={HeaderData.titleDesc} /></h3>
      </div>
      <div className="social-media-mobile-wrapper">
        {SocialMediaIcons()}
      </div>
    </div>
  )
}
