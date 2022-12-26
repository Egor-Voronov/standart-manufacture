import Review from "./feedback/Feedback";
import Data from "./test/Data";

export default function Feedbacks() {
  return (
    <div className="reviews__body" id="reviews">
      <h2 className="heading reviews__heading mobile__heading">
        отзывы клиентов
      </h2>
      <h2 className="heading reviews__heading desktop__heading">
        отзывы наших клиентов
      </h2>
      <div className="reviews__container">
        {Data.map((elem) => (
          <Review key={elem.id} {...elem} />
        ))}
      </div>
    </div>
  );
}
