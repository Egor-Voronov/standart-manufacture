import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useState } from "react"

export default function Geo () {
    const defaultState = {
        center: [55.751574, 37.573856],
        zoom: 5,
      };

    let state = defaultState

    const [mapHover, setMapHover] = useState(true)
    const mapHoverClassArr = ['map__hover']
    mapHover ? mapHoverClassArr[1] = '' : mapHoverClassArr[1] = 'unhovered'
    const mapHoverHandler = () => setMapHover(false)

    return (
        <div className="geo__body">
            <h2 className="heading map__heading">мы на карте</h2>

            <YMaps className='map__container'>
                <Map defaultState={state} className="map" onClick={() => (mapHoverHandler())}>
                    <Placemark geometry={[55.684758, 37.738521]} />
                </Map>
                <div className={mapHoverClassArr.join(' ')}><p>Смотреть на карте</p></div>
            </YMaps>

        </div>
    )
}