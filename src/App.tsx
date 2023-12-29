import Todos from './component/Todos';
import Todo from './models/todo';

function App() {
  // Todo 클래스로 Todo객체를 만든다.
  // new Todo를 2번 호출해서 Todo 2개 생성
  // todos는 문자열 배열이 아니라 Todo 객체 배열
  const todos = [new Todo('Learn React'), new Todo('Learn TypeScript')];

  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
