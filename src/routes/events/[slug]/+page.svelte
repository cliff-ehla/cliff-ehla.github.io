<script>
	export let data
	$: post = data.attributes
	$: p = post
	const VITE_IMAGE_BASE = import.meta.env.VITE_IMAGE_BASE
	import dayjs from "dayjs";
</script>

<div class="mx-auto max-w-screen-md px-4 leading-loose text-gray-700 text-lg">
	<img
					src={`${VITE_IMAGE_BASE}/events/${p.createdAt.split('T')[0]}-${p.slug}/cover.jpg`}
					class="shadow-lg rounded-lg mx-auto mb-8"
					alt="missing image!">
	<h1 class="text-2xl text-gray-800 my-4">{post.title}</h1>
	<p>{dayjs(post.createdAt).format('DD MMM YYYY')}</p>
	<div class="flex flex-wrap my-4">
		<span class="text-sm mr-1 mt-0.5 text-gray-500">檔案:</span>
		{#each post.event_categories.data as t}
			<a href="/events/category/{t.attributes.slug}/1" class="text-base border-b border-gray-700 text-gray-700 mr-2 mb-1">{t.attributes.name}</a>
		{/each}
	</div>
	<div class="post-body">
		{@html post.content}
	</div>
	<div class="my-4 flex flex-wrap">
		{#each post.tags as t}
			<div class="mx-1">{t}</div>
		{/each}
	</div>
</div>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>
