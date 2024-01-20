import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux";

const Header = ()=> {
	const navigate = useNavigate();
	const user = useSelector(state => state.user.user);
	const cartItems = useSelector(state => state.cart.items);

	return (
		<div>
			<div className="header-wrapper main-orange-background-color">
				<h1 onClick={()=> navigate("/")} className="logo-text font-roboto link">PIZZA DAY</h1>
				<input type="text" className="search-input" placeholder="Search for the order #"/>
				<div className="header-wrapper-cart">
					{user && <div className="header-wrapper-cart-user font-roboto">{user}</div>}
					<img
						src="../../public/icon-cart.svg"
						alt="cart"
						onClick={()=> navigate("/cart")}
						className="cart-icon link"/>
					{cartItems.length > 0 && <span className="cart-icon-quantity">{cartItems.length}</span>}
				</div>
			</div>
		</div>
	);
}

export default Header;
