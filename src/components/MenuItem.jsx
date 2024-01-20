import {useDispatch} from "react-redux";
import {addToCart} from "../redux/slices/cartSlice.js";

const MenuItem = ({ item }) => {

	const { name, unitPrice, imageUrl, ingredients, soldOut } = item;

	const dispatch = useDispatch();
	const handleAddToCart = ()=> {
		dispatch(addToCart(item));
	}

	const capitalize = (s) => {
		if (typeof s !== 'string') return '';
		return s.charAt(0).toUpperCase() + s.slice(1);
	}
	const ingredientList = ingredients.map(ingredient => capitalize(ingredient)).join(', ');


	return (
		<div className="menu-item-container">
			<img
				src={imageUrl}
				alt={name}
				className={`menu-item-image ${soldOut ? 'sold-out-image' : ''}`}
			/>

			<div className="menu-item-wrapper">
				<h4 className="menu-item-wrapper-name font-roboto">{name}</h4>
				<div className="menu-item-wrapper-ingredients">
					<span>{ingredientList}</span>
				</div>
				<h5 className="menu-item-wrapper-unitPrice font-roboto">
					{soldOut ? "SOLD OUT" : `€${unitPrice.toFixed(2)}`}
				</h5>
			</div>

			<button
				onClick={handleAddToCart}
				className={`add-to-cart-button main-orange-background-color font-roboto ${soldOut ? 'hidden' : ''}`}>
				Add to cart
			</button>
		</div>
	);
}

export default MenuItem;
