import img1 from "../../assets/2802966240624.svg";
import img2 from "../../assets/truck.svg";
import img3 from "../../assets/rub.svg";
import img4 from "../../assets/like.svg";

import Advantage from "./advantage/Advantage";

export default function Advanatages2() {
  return (
    <div className="advantages__body advantages2">
      <h2 className="heading advantages__heading">Почему мы?</h2>
      <div className="advantages__container">
        <Advantage
          img={img1}
          heading="Собственное производство"
          description="Мы изготавливаем элементы краб-системы на собственном производстве в Вологде, уделяя особое внимание качеству."
        />

        <Advantage
          img={img2}
          heading="Доставка по всей России"
          description="Мы осуществляем доставку нашей продукции по всей России."
        />

        <Advantage
          img={img3}
          heading="Доступные цены"
          description="Так как мы являемся производителем, мы 
                предлагаем нашу продукцию без лишних наценок."
        />

        <Advantage
          img={img4}
          heading="Гарантия качества"
          description="Мы уделяем особое внимание качеству нашей продукции и дорожим нашими клиентами."
        />
      </div>
    </div>
  );
}
