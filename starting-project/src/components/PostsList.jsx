import { useState, useEffect } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
    const [posts, setPosts] = useState([]); //새포스트 목록 업데이트
    const [isFetching, setIsFetching] = useState(false); //로딩중

    useEffect(() => {
        async function fetchPosts() {
            setIsFetching(true);
            const response = await fetch('http://localhost:8080/posts')
            const resData = await response.json();
            if (!response.ok) {
                console.log('error message');
            }
            setPosts(resData.posts);
            setIsFetching(false);
        }

        fetchPosts();
    }, []);

    function addPostHandler(postData) {

        fetch('http://localhost:8080/posts', {
            method:'POST',
            body:JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        

        /*************************************************************************/

        //1. 새포스트가 배열 맨처음에 들어가고, 그 뒤로 원래있던 포스트가 들어감.
        //setPosts([postData, ...posts]);

        /*2. 이전 state를 바탕으로 새로운 state를 만들때는 함수형태로 업데이트하는 것이 좋다.
            이전 state가 자동으로 들어오므로, 이를 받아 새로운 state를 만들고 값으로 반환.
            최신 버전의 유효한 상태를 가져와 제대로 갱신하도록 함.     
        */
        setPosts((existingPosts) => [postData, ...existingPosts]);
        //posts 객체배열을 jsx요소배열로 변경해야함.

        /*************************************************************************/
    }

    return (
    <>
        {!isFetching && posts.length > 0 && (      
            <ul className={classes.posts}>
                {/* <Post author="south" body="bad jab!" /> */}
                {/* 모든 postData를 Post JSX요소로 변경 -> 배열을 JSX요소배열로 매핑 */}
                {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
            </ul>
        )}

        {!isFetching && posts.length === 0 && (
            <div style={{ textAlign:'center', color:'black' }}>
                <h2>There are no posts yet.</h2>
                <p>Start adding some!</p>
            </div>
        )}

        {isFetching && (
            <div style={{ textAlign:'center', color:'black' }}>
                <p>Loading posts...</p>
            </div>
        )}


    </>
    );
    }

export default PostsList;
