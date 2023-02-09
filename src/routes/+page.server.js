import strapiClient from "../lib/strapi-client.js";

export const load = async ({fetch}) => {
	const {data} = await strapiClient.get(fetch, '/posts')
	return {
		posts: data
	}
}