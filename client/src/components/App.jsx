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

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Advanatages />
      <Catalog />
      <Advanatages isSecondAdvantage={true} />
      <Video />
      <Calculation />
      <Partners />
      <Feedbacks />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
