import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useState } from "react";
import Modal from "../modal/Modal";

export default function Geo() {
  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 5,
  };

  let state = defaultState;

  const [mapHover, setMapHover] = useState(true);
  const mapHoverClassArr = ["map__hover"];
  mapHover ? (mapHoverClassArr[1] = "") : (mapHoverClassArr[1] = "unhovered");
  const mapHoverHandler = () => setMapHover(false);

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="geo__body">
      <h2 className="heading map__heading">мы на карте</h2>

      <YMaps className="map__container">
        <Map
          defaultState={state}
          className="map"
          onClick={() => mapHoverHandler()}
        >
          <Placemark geometry={[55.684758, 37.738521]} 
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
