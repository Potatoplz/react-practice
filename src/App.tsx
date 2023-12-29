import { useState } from 'react';

import NewTodo from './component/NewTodo';
import Todos from './component/Todos';
import Todo from './models/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    // 새로운 Todo객체 생성
    const newTodo = new Todo(todoText);

    // 이전 state(prevTodos)를 기반으로 state 업데이트
    setTodos((prevTodos) => {
      //concat : 기존의 배열을 건드리지 않으면서 새로운 배열 생성
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
