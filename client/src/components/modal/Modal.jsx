import xMark from '../../assets/xMark.svg'

export default function Modal ({open, onClose, children}) {
    if (!open) return null
    return (
        <div className="overlay" onClick={onClose}>
            <div className="modal__container" onClick={e => e.stopPropagation()}>
                <img src={xMark} alt="закрыть" className="modal__close" onClick={onClose}/>
                {children}
            </div>
        </div>
    )
}