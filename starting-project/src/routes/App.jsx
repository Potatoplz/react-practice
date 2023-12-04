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