export default function Banner() {
  return (
    <div className="backgroundImage backgroundImage__banner">
      <div className="banner__container">
        <h1 className="banner__heading banner__item">краб - система</h1>
        <h2 className="banner__description banner__item">
          Для быстровозводимых <br />
          каркасных конструкций
        </h2>
        <a href="">
          <button className="greenBtn banner__btn banner__item">
            Получить консультацию
          </button>
        </a>
      </div>
    </div>
  );
}
