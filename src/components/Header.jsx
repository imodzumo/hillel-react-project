import {useContext} from "react";
import {LoginContext} from "../context/LoginContext.jsx";
import {Link} from "react-router-dom";

const Header = ()=> {

	const { user } = useContext(LoginContext);

	return (
		<div>
			<div className="header-wrapper main-orange-background-color">
				<Link to="/" className="link">
					<h1 className="logo-text font-roboto">PIZZA DAY</h1>
				</Link>
				<input type="text" className="search-input" placeholder="Search for the order #"/>
				<div className="header-wrapper-cart">
					{user && <div className="header-wrapper-cart-user font-roboto">{user}</div>}
					<Link to="/cart">
						<img src="../../public/icon-cart.svg" alt="cart" className="link"/>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Header;
