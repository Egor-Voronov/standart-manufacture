import { useState } from "react";
import Modal from "../../modal/Modal";
import mapMarker from '../../../assets/map-marker.svg'
import phoneimg from "../../../assets/phone.svg";
import { useFetching } from "../../../hooks/useFetch.hook";
import ClipLoader from "react-spinners/ClipLoader";

export default function RightItem ({ setGeo, geo, setCity, city, setPhone, phone}) {
  const [openModal, setOpenModal] = useState(false);

  const [data, error, isLoading] = useFetching('http://127.0.0.1:8000/api/citys/')

  const setHeaderPhone = (n = 0) => {
    return (
      isLoading?(
        <ClipLoader />
      ): error?(
        <h1>{error}</h1>
      ): data.length? (
        <>
        <>{data[n].phone_number}</>
        </>
      ): (
        <h1>нет данных</h1>
      )
    )
  }

  const setHeaderCity = (n = 0,) => {
    return (
      isLoading?(
        <ClipLoader />
      ): error?(
        <h1>{error}</h1>
      ): data.length? (
        <>
         <>{data[n].city_name}</>
        </>
      ): (
        <h1>нет данных</h1>
      )
    )
  }

  let [currCity, setCurrCity] = useState('Москва');
  let [currPhone, setCurrPhone] = useState('8-985-344-76-46');

  return (
    <>
      <div className="r_item_container">
        <div className="r_item_top">
          <img src={mapMarker} alt="город" className="r_item_img" />
          <div className="r_item_texts">
            <span href="" className="r_item_bold city__txt" onClick={() => setOpenModal(true)}>{currCity}</span>
            <span
              className="r_item_anchor_city r_item_anchor"
              onClick={() => setOpenModal(true)}
            >
              Все города
            </span>
          </div>
        </div>
      </div>

      <div className="r_item_container">
        <div className="r_item_top">
          <img src={phoneimg} alt='телефон' className="r_item_img"/>
          <div className="r_item_texts">
            <a href="" className="r_item_bold">{currPhone}</a>
            <span
              className="r_item_anchor_phone r_item_anchor"
            >
              Заказать звонок
            </span>
          </div>
        </div>
        <Modal
        open={openModal} 
        onClose={() => setOpenModal(false)}
      >
        <a className="modal__city" onClick={
            () => {
              setOpenModal(false)
              setCurrCity(setHeaderCity(0))
              setCurrPhone(setHeaderPhone(0))
              setGeo (
                `${data[0].map_coordinates}, ${data[0].map_coordinates2}`
              )
              setCity (
                `${data[0].city_name}`
              )
              setPhone (
                `${data[0].phone_number}`
              )
            }} 
          >{setHeaderCity(0)}</a>

        <a className="modal__city" 
          onClick={
            () => {
              setOpenModal(false)
              setCurrCity(setHeaderCity(1))
              setCurrPhone(setHeaderPhone(1))
              setGeo (
                `${data[1].map_coordinates}, ${data[1].map_coordinates2}`
              )
              setCity (
                `${data[1].city_name}`
              )
              setPhone (
                `${data[1].phone_number}`
              )
          }}
            >{setHeaderCity(1)}
        </a>
        <a className="modal__city" onClick={
            () => {
              setOpenModal(false)
              setCurrCity(setHeaderCity(2))
              setCurrPhone(setHeaderPhone(2))
              setGeo (
                `${data[2].map_coordinates}, ${data[2].map_coordinates2}`
              )
              setCity (
                `${data[2].city_name}`
              )
              setPhone (
                `${data[2].phone_number}`
              )
            }}
          >{setHeaderCity(2)}</a>
      </Modal>
      </div>
        
    </>
  )
}
