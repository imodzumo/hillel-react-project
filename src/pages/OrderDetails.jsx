import {useSelector} from "react-redux";


const OrderDetails = () => {
	const {isLoading, isError, orderInfo} = useSelector(state => state.order);

	console.log(orderInfo);


	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error loading order details.</div>;

	return (
		<div>
			<h1>Order Details</h1>
			<div>Order ID: {orderInfo.data?.id}</div>
		</div>
	);
};

export default OrderDetails;
