import * as yup from "yup";

const phoneRegExp =/(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4}$)/gm

export const validationSchema = yup.object().shape({
	name: yup.string().required(),
	phone: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
	address: yup.string().required(),
	priority: yup.boolean()
})
