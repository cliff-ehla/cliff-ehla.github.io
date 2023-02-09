import http from "$lib/http";
export const load = async ({fetch, params}) => {
	return http.get(fetch, '/events', {
		sort: 'createdAt:desc',
		populate: {
			author: true,
			event_categories: true,
			image: true
		},
		pagination: {
			page: 2,
			pageSize: 80
		}
	})
}