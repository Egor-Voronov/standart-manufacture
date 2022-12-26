import { useState } from "react";
import Modal from "../../modal/Modal";
import mapMarker from '../../../assets/map-marker.svg'
import phone from "../../../assets/phone.svg";

export default function RightItem ({}) {
  const [openModal, setOpenModal] = useState(false);
  let city = 'Mосква'
  let phoneTxt = '8-985-344-76-46'
  
  return (
    <>
      <div className="r_item_container">
        <div className="r_item_top">
          <img src={mapMarker} alt="город" className="r_item_img" />
          <div className="r_item_texts">
            <span href="" className="r_item_bold city__txt" onClick={() => setOpenModal(true)}>{city}</span>
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
            <a href="" className="r_item_bold">{phoneTxt}</a>
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
        <a className="modal__city">{'Москва'}</a>
        <a className="modal__city">{'Вологда'}</a>
        <a className="modal__city">{'Санкт-Петербуг'}</a>
      </Modal>
      </div>

    </>
  )
}
