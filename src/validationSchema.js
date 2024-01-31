import * as yup from "yup";
// /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const phoneRegExp =/(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4}$)/gm

// /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

export const validationSchema = yup.object().shape({
	name: yup.string().required(),
	phone: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
	address: yup.string().required()
})
