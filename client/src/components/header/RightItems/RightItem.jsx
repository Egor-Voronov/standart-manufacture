import { useState } from "react";
import Modal from "../../modal/Modal";
import mapMarker from '../../../assets/map-marker.svg'
import phone from "../../../assets/phone.svg";

import { useFetching } from "../../../hooks/useFetch.hook";
import ClipLoader from "react-spinners/ClipLoader";

export default function RightItem ({}) {
  const [openModal, setOpenModal] = useState(false);

  const [data, error, isLoading] = useFetching('http://127.0.0.1:8000/api/citys/')
  console.log(data)

  const setPhone = (n = 0) => {
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

  const setCity = (n = 0,) => {
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
          <img src={phone} alt='телефон' className="r_item_img"/>
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
              setCurrCity(setCity(0))
              setCurrPhone(setPhone(0))
            }} 
          >{setCity(0)}</a>

        <a className="modal__city" 
          onClick={
            () => {
              setCurrCity(setCity(1))
              setCurrPhone(setPhone(1))
          }}
            >{setCity(1)}
        </a>
        <a className="modal__city"  onClick={
            () => {
              setCurrCity(setCity(2))
              setCurrPhone(setPhone(2))
            }}
          >{setCity(2)}</a>
      </Modal>
      </div>

    </>
  )
}
