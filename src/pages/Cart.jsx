import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteFromCart, decrementQty, incrementQty, clearCart} from "../redux/slices/cartSlice.js";

const Cart = ()=> {
	const dispatch = useDispatch();
	const items = useSelector(state => state.cart.items);


	return (
		<div className="cart-main">
			<div className="cart-container">
				<Link to="/menu" className="font-roboto back-to-menu-button">
					<span className="arrow-left">&#8594;</span>
					<span> Back to menu</span>
				</Link>

				<h1 className="cart-title font-roboto">Your cart, name</h1>

				{items.map(item =>
					<div className="cart-item-container" key={item.id}>
						<div className="cart-item-wrapper">
							<h5 className="cart-item-wrapper-quantity font-roboto">{item.quantity}x </h5>
							<h4 className="cart-item-wrapper-name font-roboto">{item.name}</h4>
						</div>

						<div className="cart-item-price-container">
							<h5 className="cart-item-price-wrapper font-roboto">
								€{item.unitPrice.toFixed(2)}
							</h5>

							<div className="cart-item-quantity-wrapper">
								<button
									onClick={()=> dispatch(decrementQty(item))}
									className="button-quantity"
								>-</button>
								<div>{item.quantity}</div>
								<button
									onClick={()=> dispatch(incrementQty(item))}
									className="button-quantity"
								>+</button>
							</div>

							<button
								onClick={()=> dispatch(deleteFromCart(item))}
								className="submit-button main-orange-background-color font-roboto uppercase"
							>Delete</button>
						</div>
					</div>
				)}
			</div>

			<button
				onClick={()=> dispatch(clearCart([]))}
				className="go-back-button font-roboto uppercase"
			>Clear cart</button>
		</div>
	);
}

export default Cart;
