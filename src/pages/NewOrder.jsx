import {useForm, Controller} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {validationSchema} from "../validationSchema.js";
import Input from "../components/Input.jsx";
import {useSelector, useDispatch} from "react-redux";
import {updateTotalPrice} from "../redux/slices/cartSlice.js";


const NewOrder = () => {
	const dispatch = useDispatch();
	const user = useSelector(state => state.user.user);
	const currentTotalPrice = useSelector(state => state.cart.totalPrice);


	const {handleSubmit, formState: { errors }, control} = useForm({
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
	}

	return (
		<div className="new-order-container">
			<h2 className="new-order-title font-roboto">Ready to order ? Let`s go!</h2>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="new-order-input-container"
			>
				<h4 className="new-order-input-container-title font-roboto">First Name</h4>
				<Controller
					name="name"
					control={control}
					render={({field, fieldState: {error}}) => <Input {...field} error={error} placeholder="name" type="text"/>}
				/>

				<h4 className="new-order-input-container-title font-roboto">Phone number</h4>
				<Controller
					name="phone"
					control={control}
					render={({field, fieldState: {error}}) => <Input {...field} error={error} placeholder="phone" type="text"/>}
				/>

				<h4 className="new-order-input-container-title font-roboto">Address</h4>
				<Controller
					name="address"
					control={control}
					render={({field, fieldState: {error}}) => <Input {...field} error={error} placeholder="address" type="text"/>}
				/>

				<div></div>
				<div className="checkbox-container">
					<Controller
						name="priority"
						control={control}
						render={({field, fieldState: {error}}) =>
							<Input
								{...field}
								error={error}
								placeholder="priority"
								type="checkbox"
								onChange={(e) => handlePriorityChange(e.target.checked)}
							/>}
					/>
					<label htmlFor="priority" className="font-roboto">Want to yo give your order priority?</label>
				</div>


				<button type="submit" className="buttons order-button font-roboto uppercase">ORDER NOW FOR €{currentTotalPrice.toFixed(2)}</button>
			</form>

		</div>
	)
}

export default NewOrder;
