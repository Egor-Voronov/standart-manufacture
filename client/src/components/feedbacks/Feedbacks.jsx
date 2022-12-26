import Feedback from "./feedback/Feedback";
import { useEffect, useState, CSSProperties } from "react";
import axios from "axios";
import { useFetching } from "../../hooks/useFetch.hook";
import ClipLoader from "react-spinners/ClipLoader"

export default function Feedbacks() {
  const [data, error, isLoading] = useFetching('http://127.0.0.1:8000/api/feedbacks/')
  console.log(data)

  return (
    <div className="reviews__body" id="reviews">
      <h2 className="heading reviews__heading mobile__heading">
        отзывы клиентов
      </h2>
      <h2 className="heading reviews__heading desktop__heading">
        отзывы наших клиентов
      </h2>
      <div className="reviews__container">
        {/* {Data.map((elem) => (
          <Review key={elem.id} {...elem} />
        ))} */}

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
