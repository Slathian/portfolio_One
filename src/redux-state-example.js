import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';

function App() {

  const state = useSelector(state => state.count);

  const dispatch = useDispatch();
  
  const {increment, decrement} = bindActionCreators(actionCreators, dispatch);




  return (
    <div>
      <h1>Count: {state.count}</h1>
      <div>
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => decrement()}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
