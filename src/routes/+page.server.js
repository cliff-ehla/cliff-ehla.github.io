import http from "$lib/http";
export const load = async ({fetch, params}) => {
	const [
		{data: events},
		{data: posts}
	] = await Promise.all([
		http.get(fetch, '/events', {
			sort: 'start_date:desc',
			populate: {
				author: true,
				event_categories: true,
				image: true
			},
			pagination: {
				page: 1,
				pageSize: 5
			}
		}),
		http.get(fetch, '/posts', {
			sort: 'createdAt:desc',
			populate: {
				author: true,
				categories: true,
				tags: true,
				image: true
			},
			pagination: {
				page: 1,
				pageSize: 5
			}
		})
	])
	return {
		events,
		posts
	}
}