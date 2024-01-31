import { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
	const { onChange, onBlur, name, value, placeholder, error, type } = props;

	const inputClass = type === 'checkbox' ? 'input-component checkbox-input' : 'input-component';

	return (
		<div>
			<input
				type={type}
				placeholder={type !== 'checkbox' ? placeholder : ''}
				ref={ref}
				value={value}
				onBlur={onBlur}
				onChange={onChange}
				name={name}
				className={inputClass}
			/>
			{error && <div>{error.message}</div>}
		</div>
	);
});

export default Input;
