import partner1 from "../../assets/partner1.png";
import partner2 from "../../assets/partner2.png";
import partner3 from "../../assets/partner3.png";

export default function Partners() {
  return (
    <>
      <div id="partners"></div>
      <div className="partners__body">
        <h2 className="heading partners__heading">наши партнеры</h2>
        <div className="partners__container">
          <a href="">
            <img src={partner1} alt="наш партнер" className="partner partner1" />
          </a>
          <a href="">
            <img src={partner2} alt="наш партнер" className="partner partner2" />
          </a>
          <a href="">
            <img src={partner3} alt="наш партнер" className="partner partner3" />
          </a>
        </div>
    </div>
    </>
  );
}
