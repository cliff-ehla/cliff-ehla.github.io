import http from "$lib/http";
export const load = async ({fetch, params}) => {
	return http.get(fetch, '/posts', {
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
	})
}