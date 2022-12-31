import Feedback from "./feedback/Feedback";
import { useFetching } from "../../hooks/useFetch.hook";
import ClipLoader from "react-spinners/ClipLoader";

export default function Feedbacks({apiRoute}) {
  const [data, error, isLoading] = useFetching(`${apiRoute}feedbacks/`);

  return (
    <div className="reviews__body" id="reviews">
      <h2 className="heading reviews__heading mobile__heading">
        отзывы клиентов
      </h2>
      <h2 className="heading reviews__heading desktop__heading">
        отзывы наших клиентов
      </h2>
      <div className="reviews__container">

      {
        isLoading?(
          <ClipLoader />
        ): error?(
          <h1>{error}</h1>
        ): data.length? (
          <>{
            data.map(e => (
              <Feedback key={e.id} {...e} />
            ))
          }</>
        ): (
          <h1>нет данных</h1>
        )
      }

      </div>
    </div>
  );
}
