import MenuItem from "../components/MenuItem.jsx";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getMenuItems} from "../redux/slices/cartSlice.js";

const Menu = ()=> {
	const dispatch = useDispatch();
	const {isLoading, isError, menuItems} = useSelector(state => state.cart)

	useEffect(()=> {
		dispatch(getMenuItems());
	}, [dispatch])

	// if (isLoading) return <div className="menu-container">Loading menu...</div>;
	if (isError) return <div className="menu-container">No menu items available.</div>;

	return (
		<div>
			<div className="menu-container">
				{menuItems.map(item => <MenuItem key={item.id} item={item} />)}
			</div>
		</div>
	);
}

export default Menu;
