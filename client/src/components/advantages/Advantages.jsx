import img1 from "../../assets/advantageImg1.svg";
import img2 from "../../assets/piggy.svg";
import img3 from "../../assets/cycle.svg";
import img4 from "../../assets/montage.svg";

import img5 from "../../assets/2802966240624.svg";
import img6 from "../../assets/truck.svg";
import img7 from "../../assets/rub.svg";
import img8 from "../../assets/like.svg";

import Advantage from "./advantage/Advantage";

export default function Advanatages2({isSecondAdvantage}) {
  return (
    <div className={isSecondAdvantage ? 'advantages__body advantages2' : 'advantages__body'}>
      <h2 className="heading advantages__heading">{isSecondAdvantage ? "Почему мы?" : 'преимущества системы'}</h2>
      <div className="advantages__container">
        {isSecondAdvantage ?(
          <>
        <Advantage
          img={img5}
          heading="Собственное производство"
          description="Мы изготавливаем элементы краб-системы на собственном производстве в Вологде, уделяя особое внимание качеству."
        />

        <Advantage
          img={img6}
          heading="Доставка по всей России"
          description="Мы осуществляем доставку нашей продукции по всей России."
        />

        <Advantage
          img={img7}
          heading="Доступные цены"
          description="Так как мы являемся производителем, мы 
                предлагаем нашу продукцию без лишних наценок."
        />

        <Advantage
          img={img8}
          heading="Гарантия качества"
          description="Мы уделяем особое внимание качеству нашей продукции и дорожим нашими клиентами."
        />
        </>) :(
          <>
            <Advantage
            img={img1}
            heading="Высокая прочность,
                      жёсткость и надёжность"
            description="По прочности  соединение с помощью 
                  краб-системы ничем не уступает сварке"
          />
  
          <Advantage
            img={img2}
            heading="Низкая стоимость"
            description={
              <span>
                {" "}
                Цена конструкции относительна низка, так как: <br />
                • Вам не нужно использовать сварочный аппарат; <br />• работу Вы
                можете сделать своими руками{" "}
              </span>
            }
          />
  
          <Advantage
            img={img3}
            heading="Возможность многоразового 
                  использования"
            description="Система соединения позволяет перестроить 
                  конструкцию – уменьшить, увеличить размеры"
          />
  
          <Advantage
            img={img4}
            heading="Простота монтажа"
            description="Для выполнения работ Вам не требуется 
                  специальных знаний, Краб-система 
                  закрепляется при помощи болтов и гаек"
          />
          </>
        )
      }
      </div>
    </div>
  );
}
