import TodoItem from './TodoItem';
import Todo from '../models/todo';
import classes from '../css/Todos.module.css';

// key는 map()을 호출하는 목록 안에서 추가되어야 함.
// bind() : 미래에 실행할 함수를 미리 설정
const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
