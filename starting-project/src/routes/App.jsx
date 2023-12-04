import { Outlet } from 'react-router-dom';

import PostsList from '../components/PostsList';

function App() {

  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  ); 
}

export default App;

// 라우트 정의의 loader 프로퍼티에 할당되는 함수
// 컴포넌트 바깥에서 실행되기 때문에 컴포넌트 state를 바꿀 수 없다. 
export async function loader() {
  const response = await fetch('http://localhost:8080/posts')
  const resData = await response.json();
  return resData.posts; // 화면에 표시할 데이터를 반환: App() 요소에서 모두 사용가능
}