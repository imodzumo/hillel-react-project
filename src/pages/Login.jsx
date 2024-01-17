import {useContext, useState} from "react";
import {LoginContext} from "../context/LoginContext.jsx";
import { useNavigate } from "react-router-dom";

const Login = ()=> {

	const [enteredName, setEnteredName] = useState('');
	const { setUser } = useContext(LoginContext);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		setUser(enteredName);
		console.log(`New user added: ${enteredName}`);
		setEnteredName('');
		navigate('/menu');
	};

	return (
		<div className="login-container font-roboto">
			<h1 className="login-title">The best pizza.</h1>
			<h2 className="login-subtitle main-orange-text-color">Straight out of the oven, straight to you</h2>
			<h3 className="login-subtitle-second">Welcome! Please start by telling us your name:</h3>

			<form onSubmit={handleSubmit} className="input-container">
				<input
					type="text"
					className="input-field"
					value={enteredName}
					onChange={(e) => setEnteredName(e.target.value)}
					placeholder="Your full name"
				/>
				<button type="submit" className="submit-button main-orange-background-color">Submit</button>
			</form>
		</div>
	);
}

export default Login;
