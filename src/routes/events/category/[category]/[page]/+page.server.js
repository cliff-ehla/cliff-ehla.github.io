import http from "$lib/http";
export const load = async ({fetch, params}) => {
	const query = {
		sort: 'start_date:desc',
		populate: {
			author: true,
			event_categories: true,
			image: true
		},
		pagination: {
			page: params.page,
			pageSize: 12
		}
	}
	const cat_slug = params.category
	if (cat_slug !== 'all') {
		query.filters = {
			event_categories: {
				slug: cat_slug
			}
		}
	}
	return http.get(fetch, '/events', query)
}