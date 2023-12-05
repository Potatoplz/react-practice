import { useLoaderData, Link } from 'react-router-dom';

import Modal from '../components/Modal';
import classes from './PostDetails.module.css';

function PostDetails() {
    const post = useLoaderData(); // 하단 loader함수에서 반환한 resData.post를 담고있다.

    if (!post) {
    return (
        <Modal>
        <main className={classes.details}>
            <h1>Could not find post</h1>
            <p>Unfortunately, the requested post could not be found.</p>
            <p>
            <Link to=".." className={classes.btn}>
                Okay
            </Link>
            </p>
        </main>
        </Modal>
    );
    }
    return (
    <Modal>
        <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
        </main>
    </Modal>
    );
}

export default PostDetails;

// loader에서 인자로 받는 데이터 객체에서 postId를 얻을 수 있다. 
//export async function loader({params, request}) {
export async function loader(data) {
    console.log('PostDetails data:::', data);
    //console.log('PostDetails request:::', request);
    //console.log('PostDetails params:::', params);

    const response = await fetch('http://localhost:8080/posts/' + data.params.postId);
    //라우트정의할때 'postId'를 식별자로 사용했으므로, params.postId로 접근
    //이렇게 하면 라우트가 활성화됐을 때 URL에 포함된 포스트ID를 가져올 수 있다. 
    const resData = await response.json();
    return resData.post; // post 없으면 undefined로 옴.
}