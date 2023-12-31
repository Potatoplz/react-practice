import NewTodo from './component/NewTodo';
import Todos from './component/Todos';
import TodosContextProvider from './store/todo-context';

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
