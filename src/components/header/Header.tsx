import './Header.css'
import headerImg from '../../shared/img/IMG_0085.png'
import { textEnglish } from '../../data/TextEnglish'

export const Header = () => {
  return (
    <div className="header">
      <div className="main-line"></div>
      <div className="title-wrapper">
        <h1 className="title-name font-upper">{textEnglish.titleName}</h1>
        <h3 className="title-desc font-upper">{textEnglish.titleDesc}</h3>
      </div>
      <div className="title-img">
        <img src={headerImg} alt="Profile picture" />
      </div>
    </div>
  )
}