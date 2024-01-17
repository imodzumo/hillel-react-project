import MenuItem from "../components/MenuItem.jsx";
import {useEffect, useState} from "react";
import {PIZZA_API} from "../../constants.js";

const Menu = ()=> {

	const [menu, setMenu] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(()=> {
		const getMenu = async ()=> {
			try {
				const res = await fetch(`${PIZZA_API}/menu`);
				if (!res.ok) {
					throw new Error('Failed to fetch menu');
				}
				const {data} = await res.json();
				setMenu(data);
			} catch (error) {
				console.error(error.message);
			} finally {
				setIsLoading(false);
			}

		}
		getMenu();
	}, [])

	if (isLoading) return <div className="menu-container">Loading menu...</div>;
	if (menu.length === 0) return <div className="menu-container">No menu items available.</div>;

	return (
		<div>
			<div className="menu-container">
				{menu.map(item => <MenuItem key={item.id} item={item} />)}
			</div>
		</div>
	);
}

export default Menu;
