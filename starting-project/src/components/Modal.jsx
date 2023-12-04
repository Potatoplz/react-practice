import classes from './Modal.module.css';


//function Modal(props) {
//객체구조분해를 통해 props의 children 속성에 바로 접근
function Modal({children, onClose }) {
    return <>
        <div className={classes.backdrop} onClick={onClose} />
        <dialog open={true} className={classes.modal}>
            {children}
        </dialog>
    </>
}

export default Modal;