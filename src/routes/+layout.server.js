export const prerender = true
export const trailingSlash = 'always'
import http from "../lib/http.js";
export const load = async ({fetch}) => {
	const [
		{data: categories},
		{data: event_categories}
	] = await Promise.all([
		http.get(fetch, '/categories'),
		http.get(fetch, '/event-categories')
	])
	return {
		categories,
		event_categories
	}
}