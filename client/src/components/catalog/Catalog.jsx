import CatalogCard from "./catalogCard/CatalogCard";
import { useFetching } from "../../hooks/useFetch.hook";
import ClipLoader from "react-spinners/ClipLoader";

export default function Catalog() {
  const [data, error, isLoading] = useFetching('http://127.0.0.1:8000/api/products/')

  return (
    <div className="catalog__body" id="catalog">
      <h2 className="heading catalog__heading">всегда в наличии</h2>
      <div className="cards__container">
           {
              isLoading?(
                <ClipLoader />
              ): error?(
                <h1>{error}</h1>
              ): data.length? (
                <> {
                    data.map(e => (
                      <CatalogCard key={e.id} {...e} />
                    ))
                  }
                </>
              ): (
                <h1>нет данных</h1>
              )
            }
      </div>
    </div>
  );
}