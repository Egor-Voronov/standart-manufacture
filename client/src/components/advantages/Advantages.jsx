import img1 from "../../assets/advantageImg1.svg";
import img2 from "../../assets/piggy.svg";
import img3 from "../../assets/cycle.svg";
import img4 from "../../assets/montage.svg";

import img5 from "../../assets/2802966240624.svg";
import img6 from "../../assets/truck.svg";
import img7 from "../../assets/rub.svg";
import img8 from "../../assets/like.svg";

import Data1 from "./data/Data1.jsx";
import Data2 from "./data/Data2.js";

import Advantage from "./advantage/Advantage";

export default function Advantages({ isSecondAdvantage }) {
  return (
    <div
      className={
        isSecondAdvantage ? "advantages__body advantages2" : "advantages__body"
      }
    >
      <h2 className="heading advantages__heading">
        {isSecondAdvantage ? "Почему мы?" : "преимущества системы"}
      </h2>
      <div className="advantages__container">
        {isSecondAdvantage ? (
          <>
            {Data2.map((e) => (
              <Advantage {...e} key={e.id} />
            ))}
          </>
        ) : (
          Data1.map((e) => <Advantage {...e} key={e.id} />)
        )}
      </div>
    </div>
  );
}
