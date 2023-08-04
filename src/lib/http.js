import qs from 'qs'
const VITE_API_BASE = import.meta.env.VITE_API_BASE
const VITE_STRAPI_TOKEN = import.meta.env.VITE_STRAPI_TOKEN
const onRes = async (res) => {
	return await res.json()
}

const getQueryUrl = (resource, query) => {
	return `${resource}?${qs.stringify(query, {
		encodeValuesOnly: true
	})}`
}

const http = (() => {
	async function get (fetch, resource, query) {
		resource = getQueryUrl(resource, query)
		const res = await fetch(`${VITE_API_BASE}/api` + resource, {
			headers: {
				'Authorization': `bearer ${VITE_STRAPI_TOKEN}`
			}
		})
		return onRes(res)
	}

	// an empty object is necessary, otherwise result fatal error when not passing body params
	async function post (fetch, resource, body = {}) {
		body = {data: body}
		const res = await fetch(`${VITE_API_BASE}/api` + resource, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `bearer ${VITE_STRAPI_TOKEN}`
			},
			body: body && JSON.stringify(body)
		})
		return onRes(res)
	}

	// an empty object is necessary, otherwise result fatal error when not passing body params
	async function put (fetch, resource, body = {}) {
		body = {data: body}
		const res = await fetch(`${VITE_API_BASE}/api` + resource, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `bearer ${VITE_STRAPI_TOKEN}`
			},
			body: body && JSON.stringify(body)
		})
		return onRes(res)
	}

	return {
		get,
		post,
		put
	}
})()

export default http