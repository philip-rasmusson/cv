import './Header.css'
import headerImg from '../../shared/img/IMG_0085.png'

export const Header = () => {
  return (
    <div className="header">
      <div className="main-line"></div>
      <div className="title-wrapper">
        <h1 className="upper">Philip Rasmusson</h1>
        <h3 id="title-desc" className="upper"></h3>
      </div>
      <div className="title-img">
        <img src={headerImg} alt="Profile picture" />
      </div>
    </div>
  )
}
