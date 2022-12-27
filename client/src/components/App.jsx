import Header from "./header/Header";
import Banner from "./banner/Banner";
import Advanatages from "./advantages/Advantages";
import Catalog from "./catalog/Catalog";
import Video from "./video/Video";
import Calculation from "./calculation/Calculation";
import Partners from "./partners/Partners";
import Feedbacks from "./feedbacks/Feedbacks";
import Map from "./map/Geo";
import Footer from "./footer/Footer";
import { useState } from "react";

function App() {
  let [geo, setGeo] = useState('55.751574, 37.573856');
  let [city, setCity] = useState('Москва')
  let [phone, setPhone] = useState('8-985-344-76-46')

  return (
    <div className="App">
      <Header geo={geo} setGeo={setGeo} city={city} setCity={setCity} phone={phone} setPhone={setPhone} />
      <Banner />
      <Advanatages />
      <Catalog />
      <Advanatages isSecondAdvantage={true} />
      <Video />
      <Calculation />
      <Partners />
      <Feedbacks />
      <Map geo={geo} city={city} phone={phone} />
      <Footer />
    </div>
  );
}

export default App;
