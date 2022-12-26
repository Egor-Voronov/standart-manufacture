import Data from "./test/Data";
import CatalogCard from "./catalogCard/CatalogCard";

export default function Catalog() {
  return (
    <div className="catalog__body" id="catalog">
      <h2 className="heading catalog__heading">всегда в наличии</h2>
      <div className="cards__container">
        <div className="card__group">
          {Data.map((element) => (
            <CatalogCard {...element} key={element.id} />
          ))}
        </div>

        <div className="card__group">
          {Data.map((element) => (
            <CatalogCard {...element} key={element.id + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}