/**
 * React props는 항상 객체 형태
 * 직접 넘긴 데이터 외에 children 등의 프로퍼티도 있다.
 * 따라서 props는 제네릭 타입을 써서 children 같은 기본 props를 사용할 수 있고,
 * 새로운 props를 추가로 정의해서 사용할 수 있도록 한다.
 * React.FC : React 패키지에 정의된 FunctionComponent 타입으로, 이 함수가 함수형 컴포넌트로 동작한다는 것을 명시.
 */

import Todo from '../models/todo';

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
