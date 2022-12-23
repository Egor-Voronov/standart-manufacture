import { useState } from "react"
import product1 from '../../assets/T-crab.png'

export default function Catalog () {
    const [buttonText, setButtonText] = useState('Заказать')

    const buttonActiveHandler = () => setButtonText('Отменить')
    const buttonNotActiveHandler = () => setButtonText('Заказать')

    return (
        <div className="catalog__body" id='catalog'>
            <h2 className="heading catalog__heading">всегда в наличии</h2>
            <div className="cards__container">

                <div className="card__group">
                    <div className="card__body">
                        <img src={product1} alt="изображение товара" className="card__image" />
                        <div className="card__info">
                            <h1 className="card__name notoSans_card">{'Т-образная краб-система 20х20'}</h1>
                            <div className="card_pricing card_info_item">
                                <h3 className="pricing__price">{20} руб/комп</h3>
                                <h3 className="pricing__amount notoSans_card"><div>0</div> <span> комп.</span></h3>  
                            </div>
                            <div className="card_btn_container">
                                <button className="card__btn outlineBtn card_info_item"
                                    onTouchStart={() => buttonActiveHandler()}
                                    onTouchEnd={() => buttonNotActiveHandler()}
                                    onMouseDown={() => buttonActiveHandler()}
                                    onMouseUp={() => buttonNotActiveHandler()}>
                                    {buttonText}       
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="card__body">
                        <img src={product1} alt="изображение товара" className="card__image" />
                        <div className="card__info">
                            <h1 className="card__name notoSans_card">{'Т-образная краб-система 20х20'}</h1>
                            <div className="card_pricing card_info_item">
                                <h3 className="pricing__price">{20} руб/комп</h3>
                                <h3 className="pricing__amount notoSans_card"><div>0</div> <span> комп.</span></h3>  
                            </div>
                            <div className="card_btn_container">
                                <button className="card__btn outlineBtn card_info_item"
                                    onTouchStart={() => buttonActiveHandler()}
                                    onTouchEnd={() => buttonNotActiveHandler()}
                                    onMouseDown={() => buttonActiveHandler()}
                                    onMouseUp={() => buttonNotActiveHandler()}>
                                    {buttonText}       
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card__group">
                    <div className="card__body">
                        <img src={product1} alt="изображение товара" className="card__image" />
                        <div className="card__info">
                            <h1 className="card__name notoSans_card">{'Т-образная краб-система 20х20'}</h1>
                            <div className="card_pricing card_info_item">
                                <h3 className="pricing__price">{20} руб/комп</h3>
                                <h3 className="pricing__amount notoSans_card"><div>0</div> <span> комп.</span></h3>  
                            </div>
                            <div className="card_btn_container">
                                <button className="card__btn outlineBtn card_info_item"
                                    onTouchStart={() => buttonActiveHandler()}
                                    onTouchEnd={() => buttonNotActiveHandler()}
                                    onMouseDown={() => buttonActiveHandler()}
                                    onMouseUp={() => buttonNotActiveHandler()}>
                                    {buttonText}       
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="card__body">
                        <img src={product1} alt="изображение товара" className="card__image" />
                        <div className="card__info">
                            <h1 className="card__name notoSans_card">{'Т-образная краб-система 20х20'}</h1>
                            <div className="card_pricing card_info_item">
                                <h3 className="pricing__price">{20} руб/комп</h3>
                                <h3 className="pricing__amount notoSans_card"><div>0</div> <span> комп.</span></h3>  
                            </div>
                            <div className="card_btn_container">
                                <button className="card__btn outlineBtn card_info_item"
                                    onTouchStart={() => buttonActiveHandler()}
                                    onTouchEnd={() => buttonNotActiveHandler()}
                                    onMouseDown={() => buttonActiveHandler()}
                                    onMouseUp={() => buttonNotActiveHandler()}>
                                    {buttonText}       
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
} 