export default function Calculation() {
  return (
    <div className="calculation__body" id="calculation">
      <form className="calculation__form">
        <h2 className="heading calculation__heading">оставить заявку</h2>
        <h3 className="form__description">на расчет стоимости</h3>
        <div className="form_inputs_container">
          <input
            type="phone"
            placeholder="      Номер телефона"
            className="form__input phone__input"
            required
          />
          <input
            type="email"
            placeholder="      E-mail"
            className="form__input email__input"
            required
          />
          <button className="greenBtn form__btn">Заказать расчёт цены</button>

          <div className="checkbox">
            <label className="custom-checkbox">
              <input type="checkbox" required />
              <span>
                Соглашаюсь с{" "}
                <a href="" className="checkbox__anchor">
                  условиями передачи данных
                </a>
              </span>
            </label>
          </div>
          
        </div>
      </form>
    </div>
  );
}
