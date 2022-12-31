import { useState } from "react";
import Modal from "../../modal/Modal";

export default function CatalogCard(props) {
  const [buttonText, setButtonText] = useState("Заказать");

  const buttonActiveHandler = () => setButtonText("Отменить");
  const buttonNotActiveHandler = () => setButtonText("Заказать");

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="card__body">
      <img
        src={props.photo}
        alt="изображение товара"
        className="card__image"
        onClick={() => setOpenModal(true)}
      />
      <div className="card__info">
        <h1 className="card__name notoSans_card">{props.product_name}</h1>
        <div className="card_pricing card_info_item">
          <h3 className="pricing__price">{props.price} руб/комп</h3>
          <h3 className="pricing__amount notoSans_card">
            <div>{props.count}</div> <span> комп.</span>
          </h3>
        </div>
        <div className="card_btn_container">
          <button
            className="card__btn outlineBtn card_info_item"
            onTouchStart={() => buttonActiveHandler()}
            onTouchEnd={() => buttonNotActiveHandler()}
            onMouseDown={() => buttonActiveHandler()}
            onMouseUp={() => buttonNotActiveHandler()}
          >
            {buttonText}
          </button>
        </div>
      </div>

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <img
          src={props.photo}
          alt="превью товара"
          className="card__image modal__preview"
        />
      </Modal>
    </div>
  );
}
