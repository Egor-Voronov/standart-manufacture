export default function Advantage({ img, heading, description }) {
  return (
    <div className="advantage">
      <div className="advantage_img_container">
        <img src={img} alt="наше преимущество" className="advantage__image" />
      </div>
      <div className="advantage__txts">
        <h3 className="advantage__heading">{heading}</h3>
        <h4 className="advantage__description">{description}</h4>
      </div>
    </div>
  );
}
