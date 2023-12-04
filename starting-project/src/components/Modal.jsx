import { useNavigate } from 'react-router-dom';

import classes from './Modal.module.css';


//function Modal(props) {
//객체구조분해를 통해 props의 children 속성에 바로 접근
function Modal({children}) {
    const navigate = useNavigate();

    function closeHandler() { //백드롭 클릭 이벤트
        // navigate('/'); // 절대경로
        navigate('..'); // 상대경로
    }

    return <>
        <div className={classes.backdrop} onClick={closeHandler} />
        <dialog open={true} className={classes.modal}>
            {children}
        </dialog>
    </>
}

export default Modal;