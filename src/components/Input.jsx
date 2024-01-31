import { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
	const { onChange, onBlur, name, value, placeholder, error, type } = props;

	return (
		<div>
			<input
				type={type}
				placeholder={placeholder}
				ref={ref}
				value={value}
				onBlur={onBlur}
				onChange={onChange}
				name={name}
				className="input-component"
			/>
			{error && <div>{error.message}</div>}
		</div>
	);
});

export default Input;
