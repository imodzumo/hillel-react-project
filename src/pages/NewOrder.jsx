import {useForm, Controller} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {validationSchema} from "../validationSchema.js";
import Input from "../components/Input.jsx";
import {useSelector} from "react-redux";



const NewOrder = () => {
	const user = useSelector(state => state.user.user);

	const {register, handleSubmit, formState: { errors }, reset, control} = useForm({
		defaultValues: {
			name: user,
			phone: "+380",
			address: ""
		},
		resolver: yupResolver(validationSchema),
	});

	const onSubmit = (data) => {
		console.log(data);
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


				<button type="submit">ORDER NOW FOR €--</button>
			</form>

		</div>
	)
}

export default NewOrder;
