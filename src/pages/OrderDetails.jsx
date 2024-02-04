import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getMenuItems} from "../redux/slices/cartSlice.js";


const OrderDetails = () => {
	const dispatch = useDispatch();
	const {menuItems} = useSelector(state => state.cart)
	const {isLoading, isError, orderInfo} = useSelector(state => state.order);

	useEffect(()=> {
		dispatch(getMenuItems());
	}, [dispatch])


	const estimatedDelivery = orderInfo.data?.estimatedDelivery;
	const formattedDate = new Intl.DateTimeFormat('en-US', {
		month: 'short',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		hour12: true
	}).format(new Date(estimatedDelivery ?? new Date()));

	const timeDifferenceMessage = (() => {
		const futureTime = new Date(estimatedDelivery ?? new Date());
		const currentTime = new Date();
		return Math.max(Math.floor((futureTime - currentTime) / (1000 * 60)), 0);
	})();

	const capitalize = (s) => {
		if (typeof s !== 'string') return '';
		return s.charAt(0).toUpperCase() + s.slice(1);
	}


	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error loading order details.</div>;

	return (
		<div>
			<div className="order-details-container">
				<div className="order-details-status-header">
					<h2 className="order-details-title font-roboto">Order #{orderInfo.data.id} status: {orderInfo.status}</h2>
					<div className="order-details-status-container">
						{orderInfo.data.priority && <div className="priority-status uppercase font-roboto">Priority</div>}
						<div className="order-status uppercase font-roboto">{orderInfo.status} order</div>
					</div>
				</div>

				<div className="order-status-delivery-container main-beige-background">
					<div className="order-status-delivery-container-left font-roboto">Only {timeDifferenceMessage} minutes left <span>&#128512;</span></div>
					<div className="order-status-delivery-container-estimated font-roboto">(Estimated delivery: {formattedDate})</div>
				</div>

				<div className="order-status-menu">
					{orderInfo.data.cart.map(pizza => {
						const menuItem = menuItems.find(item => item.id === pizza.pizzaId);
						const ingredientsString = menuItem ? menuItem.ingredients.map(capitalize).join(', ') : 'No ingredients found';

						return (
							<div key={pizza.pizzaId} className="order-status-menu-container">
								<div className="order-status-menu-wrapper">
									<h4 className="order-status-menu-quantity font-roboto">
										{pizza.quantity}x <span className="menu-item-wrapper-name">{pizza.name}</span>
									</h4>
									<div className="menu-item-wrapper-ingredients">
										{ingredientsString}
									</div>
								</div>
								<div className="order-status-menu-price font-roboto">
									€{pizza.totalPrice.toFixed(2)}
								</div>
							</div>
						);
					})}
				</div>

				<div className="order-status-price-container main-beige-background font-roboto">
					<div>Price pizza: €{orderInfo.data.orderPrice.toFixed(2)}</div>
					<div>Price priority: €{orderInfo.data.priorityPrice.toFixed(2)}</div>
					<div>to pay on delivery: €{(orderInfo.data.orderPrice + orderInfo.data.priorityPrice).toFixed(2)}</div>
				</div>

			</div>
		</div>
	);
};

export default OrderDetails;
