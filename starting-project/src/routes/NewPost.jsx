import { Link, Form, redirect } from "react-router-dom";

import classes from './NewPost.module.css';
import Modal from "../components/Modal";

function NewPost() {
    return (
        <Modal>
            <Form method="post" className={classes.form}>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" name="body" required rows={3}/>
                </p>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" name="author" required/>
                </p>
                <p className={classes.actions}>
                    <Link to="/" type='button'>
                        Cancel
                    </Link>
                    <button>Submit</button>
                </p>
            </Form>
        </Modal>
    );
}

export default NewPost;
// button에 type='button'을 추가하지않으면 브라우저가 자동으로 HTTP요청을 보냄.(디폴트 type submit)

//export function action(data) {
    // data파라미터 : Form에서 주는 인자가 아니라 리액트라우터가 만들고 구성한 요청 객체가 들어있다. 
    //data.request
export async function action({ request }) {
    const formData = await request.formData(); //Form에 입력된 데이터를 가져온다.

    const postData1 = formData.get('body');
    const postData = Object.fromEntries(formData); // key-value형태로 입력데이터 추출

    console.log('Form 데이터추출1',postData1);
    console.log('Form 데이터추출2',postData);
    const response = await fetch('http://localhost:8080/posts', {
        method:'POST',
        body:JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log('응답 분석', response);

    return redirect('/'); // 이 함수 호출의 결과를 반환
}