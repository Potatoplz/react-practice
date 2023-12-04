import { useState } from "react";
import classes from './NewPost.module.css';

function NewPost({ onCancel, onAddPost }) {
    const [enteredBody, setEnteredBody] = useState("");
    const [enteredAuthor, setEnteredAuthor] = useState("");

    //textarea에 이벤트가 발생하면 호출되는 함수, 입력값 관리 함수
    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    //submit되면 실행될 함수, onSubmit의 value가 된다.
    //onSubmit에 연결되어 있으므로 event 객체가 매개변수로 들어온다.
    function submitHandler(event) {
        event.preventDefault(); //http 요청 방지
        // 데이터 유효성 검사 생략
        const postData = {
            body: enteredBody,
            author: enteredAuthor,
        };
        // 이렇게 가져온 postData는 포스트목록에 추가되고, 컴포넌트 목록으로 화면에 렌더링되어야 한다.
        onAddPost(postData);
        onCancel();
    }

    return (
    <form className={classes.form} onSubmit={submitHandler}>
        <p>
            <label htmlFor="body">Text</label>
            <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>
        </p>
        <p>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" required onChange={authorChangeHandler}/>
        </p>
        <p className={classes.actions}>
            <button type='button' onClick={onCancel}>Cancel</button>
            <button>Submit</button>
        </p>
    </form>
    );
}

export default NewPost;
// button에 type='button'을 추가하지않으면 브라우저가 자동으로 HTTP요청을 보냄.(디폴트 type submit)