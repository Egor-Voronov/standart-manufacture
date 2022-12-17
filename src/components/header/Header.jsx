import { useState } from "react"
import bars from '../../assets/bars.svg'
import cross from '../../assets/cross.svg'
import logo from '../../assets/Logo.svg'
import RightItem from "./RightItems/RightItem"
import mapMarker from '../../assets/map-marker.svg'
import phone from '../../assets/phone.svg'

export default function Header() {
    const [toggle, setToggle] = useState(false)

    const toggleHandler = () => {
        return setToggle(!toggle)
    }

    let menuClassArr = ['header_menu_items']
    let toggleImg = bars

    if (toggle) {
        menuClassArr[1] = 'menu_toggle_opened'
        toggleImg = cross
    } else {
        menuClassArr[1] = 'menu_toggle_closed'
        toggleImg = bars
    }

    return (
        <header className="header">
            <nav className="header__nav">
                <div className="header__menu">
                    <a href={window.location.href}><img src={logo} alt="логотип" className="logo header__logo" /></a>
                    <img src={toggleImg} alt="открыть / закрыть навигацию" onClick={() => (toggleHandler)()} className='header_menu_toggle' />
                </div>
                <ul className={menuClassArr.join(' ')}>
                    <li className="menu__item"><a className="anchor header_menu_anchor" href="#">Каталог</a></li>
                    <li className="menu__item"><a className="anchor header_menu_anchor" href="#">Расчет стоимости</a></li>
                    <li className="menu__item"><a className="anchor header_menu_anchor" href="#">Партнеры</a></li>
                    <li className="menu__item"><a className="anchor header_menu_anchor" href="#">Отзывы</a></li>
                    
                    <li className="menu__item menu_right_items">
                            <RightItem className='r__item'
                                img={mapMarker}
                                alt='город'
                                boldTxt={'Москва'}
                                normalTxt={'Все города'}
                                isCity={true}
                            />
                            <RightItem className='r_item'
                                img={phone}
                                alt='телефон'
                                boldTxt={'8-985-344-76-46'}
                                normalTxt={'Заказать звонок'}
                                isCity={false}
                            />
                    </li>
                </ul>
            </nav>
        </header>
    )
}