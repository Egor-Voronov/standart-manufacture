export default function Feedback (props) {
  return (
    <div className="review">
      <div className="review_image_container">
        <img src={props.photo} alt="фото пользователя" className="review__img" />
      </div>
      <div className="review__txts">
        <h3 className="review__name">{props.author_name.toString()}</h3>
        <p className="review__text">{props.text}</p>
      </div>
    </div>
  );
}
