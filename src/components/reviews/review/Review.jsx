import client from "../../../assets/client.png";

export default function Review(props) {
  return (
    <div className="review">
      <div className="review_image_container">
        <img src={client} alt="фото клиента" className="review__img" />
      </div>
      <div className="review__txts">
        <h3 className="review__name">{props.name}</h3>
        <p className="review__text">{props.review}</p>
      </div>
    </div>
  );
}
