import img1 from '../../assets/advantageImg1.svg'
import img2 from '../../assets/piggy.svg'
import img3 from '../../assets/cycle.svg'
import img4 from '../../assets/montage.svg'

export default function Advanatages () {
    return (
        <div className="advantages__body">
            <h2 className="heading advantages__heading">Преимущества системы</h2>
            <div className="advantages__container">
                <div className="advantage">
                    <div className="advantage_img_container">
                        <img src={img1} alt="изображение 1" className="advantage__image" />
                    </div>
                    <div className="advantage__txts">
                        <h3 className="advantage__heading">Высокая прочность,
                            жёсткость и надёжность</h3>
                        <h4 className="advantage__description">По прочности  соединение с помощью 
                            краб-системы ничем не уступает сварке</h4>
                    </div>
                </div>

                <div className="advantage">
                    <div className="advantage_img_container">
                        <img src={img2} alt="изображение 1" className="advantage__image" />
                    </div>
                    <div className="advantage__txts">
                        <h3 className="advantage__heading">Низкая стоимость</h3>
                        <h4 className="advantage__description">Цена конструкции относительна низка, так как: 
                        <br />
                            • Вам не нужно использовать сварочный аппарат; <br />
                            • работу Вы можете сделать своими руками</h4>
                    </div>
                </div>

                <div className="advantage">
                    <div className="advantage_img_container">
                        <img src={img3} alt="изображение 1" className="advantage__image" />
                    </div>
                    <div className="advantage__txts">
                        <h3 className="advantage__heading">Возможность многоразового 
                            использования</h3>
                        <h4 className="advantage__description">Система соединения позволяет перестроить 
                            конструкцию – уменьшить, увеличить размеры</h4>
                    </div>
                </div>

                <div className="advantage">
                    <div className="advantage_img_container">
                        <img src={img4} alt="изображение 1" className="advantage__image" />
                    </div>
                    <div className="advantage__txts">
                        <h3 className="advantage__heading">Простота монтажа</h3>
                        <h4 className="advantage__description">Для выполнения работ Вам не требуется 
                            специальных знаний, Краб-система 
                            закрепляется при помощи болтов и гаек </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}