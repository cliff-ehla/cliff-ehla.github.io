import {redirect} from "@sveltejs/kit";
export const load = ({params}) => {
	throw redirect(302, '/events/category/be-our-guess/1')
}