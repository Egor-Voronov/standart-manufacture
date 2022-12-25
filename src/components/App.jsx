import Header from "./header/Header"
import Banner from "./banner/Banner"
import Advanatages from "./advantages/Advantages"
import Catalog from "./catalog/Catalog"
import Advanatages2 from "./advantages/Advantages2"
import Video from "./video/Video"
import Calculation from "./calculation/Calculation"


import Map from "./map/Geo"

function App() {
   return (
    <div className="App">
      <Header />
      <Banner />
      <Advanatages />
      <Catalog />
      <Advanatages2 />
      <Video />
      {/* <Calculation /> */}


      <Map />
    </div>
  )
}

export default App
