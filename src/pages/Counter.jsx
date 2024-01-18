import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/slices/counterSlice';

const Counter = ()=> {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<div className="counter-container">
			<div className="counter-display">Count: {count}</div>
			<div className="buttons-container">
				<button onClick={() => dispatch(increment())} className="counter-button increment">
					Increment
				</button>
				<button onClick={() => dispatch(decrement())} className="counter-button decrement">
					Decrement
				</button>
			</div>

		</div>
	);
}

export default Counter;
