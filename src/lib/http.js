import qs from 'qs'
const VITE_API_BASE = 'http://localhost:1337'
const VITE_STRAPI_TOKEN = '2d9df0db38eddf3b3814af6bf8d47f15af7a00a64120b45200af42f0a8e01338840c2ae3d7c35b1fc76268d1be7d77fe546e9fe53b4fb3df5301a0621b677249590f0fa3dd84d5952564a300469a4b47287781c7d3e019e75d2f4655f5600412efdf61e2a566e5cec0223a08f4ffbb0faa1b8a6bae215975d7036f1dcbbee2a5'
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