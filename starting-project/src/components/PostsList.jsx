import { useLoaderData } from "react-router-dom";

import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
    const posts = useLoaderData();

    return (
    <>
        {posts.length > 0 && (      
            <ul className={classes.posts}>
                {/* <Post author="south" body="bad jab!" /> */}
                {/* 모든 postData를 Post JSX요소로 변경 -> 배열을 JSX요소배열로 매핑 */}
                {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
            </ul>
        )}

        {posts.length === 0 && (
            <div style={{ textAlign:'center', color:'black' }}>
                <h2>There are no posts yet.</h2>
                <p>Start adding some!</p>
            </div>
        )}
    </>
    );
    }

export default PostsList;
