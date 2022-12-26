import logo from "../../assets/fooLogo.svg";
import phone from "../../assets/phone.svg";
import mapMarker from "../../assets/map-marker.svg";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Footer() {
  async function fetchData() {
    const response = await axios.get('http://127.0.0.1:8000/api/feedbacks/')
    setData(response.data)
    console.log(response)
    console.log(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const [data, setData] = useState([])

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
            {/* <a href="#">8-985-3яяя44-76-46</a> */}
            {/* {data.map(data => <a href="#" key={data.id}>{data.title}</a>)} */}
          </div>

        </div>
      </nav>
    </footer>
  );
}

