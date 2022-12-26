import logo from "../../assets/fooLogo.svg";
import phone from "../../assets/phone.svg";
import mapMarker from "../../assets/map-marker.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <a href={window.location.href}><img src={logo} alt="логотип" className="footer__logo" /></a>
        <div className="contacts">

          <div className="footer__city">
            <img src={mapMarker} alt="город" />
            <a href="#">{"Москва, ул. Ленина, д. 25"}</a>
          </div>

          <div className="footer__phone">
            <img src={phone} alt="телефон" />
            <a href="#">8-985-344-76-46</a>
          </div>

        </div>
      </nav>
    </footer>
  );
}
