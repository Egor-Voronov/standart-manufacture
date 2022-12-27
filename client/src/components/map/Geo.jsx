import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useState, useEffect } from "react";
import Modal from "../modal/Modal";

export default function Geo({geo}) {
  const defaultMapState = {
    center: [55.751574, 37.573856],
    zoom: 7,
  }

  const [mapState, setMapState] = useState({
    ...defaultMapState
  })

  const [mapHover, setMapHover] = useState(true);
  const mapHoverClassArr = ["map__hover"];
  mapHover ? (mapHoverClassArr[1] = "") : (mapHoverClassArr[1] = "unhovered");
  const mapHoverHandler = () => setMapHover(false);

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (geo) {
      setMapState(prev => (
        {
          ...prev, center: geo.split(', ').map(e => Number(e))
        }
      ))
    }
  }, [geo])

  return (
    <div className="geo__body">
      <h2 className="heading map__heading">{}</h2>

      <YMaps className="map__container">
        <Map
          defaultState={defaultMapState}
          className="map"
          onClick={() => mapHoverHandler()}
          state={mapState}
        >
          <Placemark geometry={mapState.center} 
            onClick={() => {
              setOpenModal(true)
              mapHoverHandler()
            }
          } />
        </Map>
        <div className={mapHoverClassArr.join(" ")}>
          <p>Смотреть на карте</p>
        </div>
      </YMaps>

      <Modal
        open={openModal} 
        onClose={() => setOpenModal(false)}
      >
        <p className="geo__address">Москва, ул. Ленина, д. 25</p>
        <a className="geo__address geo_address_a">8-985-344-76-46</a>
        <a className="geo__address geo_address_a">8-981-853-66-14</a>
      </Modal>

    </div>
  );
}
