import http from "../../../lib/http.js";
import {redirect} from "@sveltejs/kit";

export const load = async ({fetch, params}) => {
	const posts = await http.get(fetch, `/posts`, {
		populate: {
			author: true,
			categories: true,
			tags: true,
			image: true,
			related_posts: true
		},
		'filters[slug][$eq]': params.slug
	})
	console.log(posts)
	if (!posts.data.length) throw redirect(307, '/');
	// console.log('post detail')
	return posts.data[0]
}