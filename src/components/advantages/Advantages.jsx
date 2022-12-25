import img1 from "../../assets/advantageImg1.svg";
import img2 from "../../assets/piggy.svg";
import img3 from "../../assets/cycle.svg";
import img4 from "../../assets/montage.svg";

import Advantage from "./advantage/Advantage";

export default function Advanatages() {
  return (
    <div className="advantages__body">
      <h2 className="heading advantages__heading">Преимущества системы</h2>
      <div className="advantages__container">
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
      </div>
    </div>
  );
}
