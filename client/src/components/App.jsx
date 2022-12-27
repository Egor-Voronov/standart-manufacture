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
  const [value, setValue] = useState()

  return (
    <div className="App">
      <Header callback={setValue}/>
      <Banner />
      <Advanatages />
      <Catalog />
      <Advanatages isSecondAdvantage={true} />
      <Video />
      <Calculation />
      <Partners />
      <Feedbacks />
      <Map geo={value} />
      <Footer />
    </div>
  );
}

export default App;
