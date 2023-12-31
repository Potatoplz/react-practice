import { useContext, useRef } from 'react';

import { TodosContext } from '../store/todo-context';
import classes from '../css/NewTodo.module.css';

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext); // todosCtx에 context를 받아 접근

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      // 공백제거시 아무것도 없다면, 함수를 빠져나간다.
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor='text'>Todo text</label>
      <input type='text' id='text' ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
