//import { Component } from 'react';
//import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index';

import classes from './Counter.module.css';
//import { INCREMENT } from '../store/index';

const Counter = () => {
  const dispatch = useDispatch(); // 이 함수는 redux store에 대한 action을 보낸다.
  const counter = useSelector((state) => state.counter);
  const show = useSelector(state => state.showCounter);

  const incrementHandler = () => {
    //dispatch({ type: INCREMENT });
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    //dispatch({ type: 'increase', amount: 5 }); // payload 전달
    dispatch(counterActions.increase(5)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 5}
  };

  const decrementHandler = () => {
    //dispatch({ type: 'decrement' });
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    //dispatch({ type: 'toggle' });
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;


// 클래스 기반 컴포넌트
// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }
  
//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment'}),
//     decrement: () => dispatch({ type: 'decrement'}),
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps) (Counter);