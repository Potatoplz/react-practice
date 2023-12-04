import { MdPostAdd, MdMessage } from 'react-icons/md';
// $ npm install react-icons

import classes from './MainHeader.module.css';

function MainHeader({ onCreatePost }) {
    return (
    <header className={classes.header}>
        <h1 className={classes.logo}>
        <MdMessage />
        React Poster
        </h1>
        <p>
        <button className={classes.button} onClick={onCreatePost}>
            <MdPostAdd size={18} />
            New Post
        </button>
        </p>
    </header>
    );
}

export default MainHeader;
/**
 * onCreatePost라는 props를 받아서 버튼의 onClick 핸들러에 전달하므로,
 * onCreatePost속성에는 모달을 표시하는 함수의 포인터가 들어와야 한다.
 * props가 함수를 값으로 받는 경우 'on'을 붙이는게 일반적.
 */