import {useContext} from "react";
import {LoginContext} from "../context/LoginContext.jsx";

const Header = ()=> {

	const { user } = useContext(LoginContext);

	return (
		<div>
			<div className="header-wrapper main-orange-background-color">
				<h1 className="logo-text font-roboto">PIZZA DAY</h1>
				<input type="text" className="search-input" placeholder="Search for the order #"/>
				{user && <div className="font-roboto">{user}</div>}
			</div>
		</div>
	);
}

export default Header;
