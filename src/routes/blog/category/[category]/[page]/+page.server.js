import http from "$lib/http";
export const load = async ({fetch, params}) => {
	const query = {
		sort: 'createdAt:desc',
		populate: {
			author: true,
			categories: true,
			tags: true,
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
			categories: {
				slug: cat_slug
			}
		}
	}
	return http.get(fetch, '/posts', query)
}