<script>
	export let data
	$: post = data
	$: p = post
	const VITE_IMAGE_BASE = import.meta.env.VITE_IMAGE_BASE
	import dayjs from "dayjs";
</script>

<div class="mx-auto max-w-screen-md px-4 leading-loose text-gray-700 text-lg">
	{#if p.attributes.image.data}
		<img
						src={p.attributes.image.data.attributes.formats.small.url}
						class="shadow-lg rounded-lg mx-auto mb-8"
						alt={p.attributes.title}>
	{:else}
		<img
						src={`https://empowerhk.s3.ap-southeast-1.amazonaws.com/events/${p.attributes.createdAt.split('T')[0]}-${p.attributes.slug}/cover.jpg`}
						class="shadow-lg rounded-lg mx-auto mb-8"
						alt={p.attributes.title}>
	{/if}
	<h1 class="text-2xl text-gray-800 my-4">{post.attributes.title}</h1>
	<p>{dayjs(post.attributes.createdAt).format('DD MMM YYYY')}</p>
	<div class="flex flex-wrap my-4">
		<span class="text-sm mr-1 mt-0.5 text-gray-500">檔案:</span>
		{#each post.attributes.event_categories.data as t}
			<a href="/events/category/{t.attributes.slug}/1" class="text-base border-b border-gray-700 text-gray-700 mr-2 mb-1">{t.attributes.name}</a>
		{/each}
	</div>
	<div class="post-body">
		{@html post.attributes.content}
	</div>
	<div class="my-4 flex flex-wrap">
		{#each post.attributes.tags as t}
			<div class="mx-1">{t}</div>
		{/each}
	</div>
</div>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>
