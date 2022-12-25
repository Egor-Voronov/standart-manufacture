import { useState } from "react";
import bars from "../../assets/bars.svg";
import cross from "../../assets/cross.svg";
import logo from "../../assets/Logo.svg";
import RightItem from "./RightItems/RightItem";

export default function Header() {
  const [toggle, setToggle] = useState(false)

  const toggleHandler = () => setToggle(!toggle)

  const anchorClickHandler = () => setToggle(false)

  const menuClassArr = ['header_menu_items']
  const headerClassArr = ['header']
  const toggleImg = toggle ? cross : bars

  toggle ? menuClassArr[1] = 'menu_toggle_opened' : menuClassArr[1] = 'menu_toggle_closed'
  toggle ? headerClassArr[1] = 'header_open_height' : headerClassArr[1] = 'header_closed_height'

  return (
      <header className={headerClassArr.join(' ')} >
          <nav className="header__nav">
              <div className="header__menu">
                  <a href={window.location.href}><img src={logo} alt="логотип" className="logo header__logo" /></a>
                  <img src={toggleImg} alt="открыть / закрыть навигацию" onClick={() => (toggleHandler)()} className='header_menu_toggle' />
              </div>
              <ul className={menuClassArr.join(' ')}>
                  <li className="menu__item">
                      <a className="anchor header_menu_anchor" onClick={() => (anchorClickHandler)()} href="#catalog">Каталог</a>
                  </li>
                  <li className="menu__item">
                      <a className="anchor header_menu_anchor" onClick={() => (anchorClickHandler)()} href="#calculation">Расчет стоимости</a>
                  </li>
                  <li className="menu__item">
                      <a className="anchor header_menu_anchor" onClick={() => (anchorClickHandler)()} href="#partners">Партнеры</a>
                  </li>
                  <li className="menu__item">
                      <a className="anchor header_menu_anchor" onClick={() => (anchorClickHandler)()} href="#reviews">Отзывы</a>
                  </li>
                  
                  <li className="menu__item menu_right_items">
                          <RightItem className='r__item' />
                  </li>
              </ul>
          </nav>
      </header>
  )
}