import TodoItem from './TodoItem';
import { TodosContext } from '../store/todo-context';
import classes from '../css/Todos.module.css';
import { useContext } from 'react';

// key는 map()을 호출하는 목록 안에서 추가되어야 함.
// bind() : 미래에 실행할 함수를 미리 설정
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext); // todosCtx에 context를 받아 접근

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
