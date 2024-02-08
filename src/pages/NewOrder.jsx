import { useForm, useController } from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup";
import {validationSchema} from "../validationSchema.js";
import Input from "../components/Input.jsx";
import {useSelector, useDispatch} from "react-redux";
import {updateTotalPrice} from "../redux/slices/cartSlice.js";
import {addOrder, createOrder} from "../redux/slices/orderSlice.js";
import {useNavigate} from "react-router-dom";


const NewOrder = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector(state => state.user.user);
	const currentTotalPrice = useSelector(state => state.cart.totalPrice);
	const cartItems = useSelector(state => state.cart.items);


	const {handleSubmit, control} = useForm({
		defaultValues: {
			name: user,
			phone: "+380",
			address: ""
		},
		resolver: yupResolver(validationSchema),
	});

	const handlePriorityChange = (isPriority) => {
		const updatedPrice = isPriority ? currentTotalPrice + 8 : currentTotalPrice - 8;

		dispatch(updateTotalPrice(updatedPrice));
	};

	const onSubmit = (data) => {
		console.log(data, currentTotalPrice);

		const updatedCartItems = cartItems.map(item => ({
			...item,
			pizzaId: item.id,
			id: undefined,
		}));

		const orderData = {
			address: data.address,
			customer: data.name,
			phone: data.phone,
			priority: data.priority,
			position: "",
			cart: updatedCartItems,
		}

		dispatch(createOrder(orderData))
			.unwrap()
			.then((response) => {
				dispatch(addOrder(response));
				navigate(`/order/${response.data.id}`);
			})
			.catch(() => {
				console.error('Something went wrong');
			});
	}

	const ControlledInput = ({ name, type, placeholder }) => {
		const {
			field,
			fieldState: { error },
		} = useController({
			name,
			control,
			defaultValue: type === "checkbox" ? false : "",
		});

		return <Input
			{...field}
			type={type}
			placeholder={placeholder}
			error={error?.message}
		/>;
	};

	return (
		<div className="new-order-container">
			<h2 className="new-order-title font-roboto">Ready to order ? Let`s go!</h2>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="new-order-input-container"
			>
				<h4 className="new-order-input-container-title font-roboto">First Name</h4>
				<ControlledInput name="name" type="text" placeholder="name"/>

				<h4 className="new-order-input-container-title font-roboto">Phone number</h4>
				<ControlledInput name="phone" type="text" placeholder="phone"/>

				<h4 className="new-order-input-container-title font-roboto">Address</h4>
				<ControlledInput name="address" type="text" placeholder="address"/>

				<div></div>
				<div className="checkbox-container">
					<ControlledInput name="priority" type="checkbox" placeholder="" onChange={(e) => handlePriorityChange(e.target.checked)}/>
					<label htmlFor="priority" className="font-roboto">Want to yo give your order priority?</label>
				</div>

				<button type="submit" className="buttons order-button font-roboto uppercase">ORDER NOW FOR €{currentTotalPrice.toFixed(2)}</button>
			</form>

		</div>
	)
}

export default NewOrder;
