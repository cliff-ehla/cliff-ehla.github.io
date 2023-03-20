<script>
	export let data
	$: post = data.attributes
	$: p = post
	const VITE_IMAGE_BASE = import.meta.env.VITE_IMAGE_BASE
	import dayjs from "dayjs";
</script>

<div class="mx-auto mb-12 max-w-screen-md px-4 leading-loose text-gray-700 text-lg">
	{#if p.image.data}
		<img
				src={p.image.data.attributes.url}
				class="shadow-lg rounded-lg mx-auto mb-8 max-w-sm"
				alt="missing image!">
	{:else}
		<img
				src={`${VITE_IMAGE_BASE}/blog/${p.createdAt.split('T')[0]}-${p.slug}/cover.jpg`}
				class="shadow-lg rounded-lg mx-auto mb-8 max-w-sm"
				alt="missing image!">
	{/if}
	<h1 class="text-2xl text-gray-800 my-4">{post.title}</h1>
	{#if post.author.data}
		<p>{post.author.data.attributes.name}</p>
	{/if}
	<p>{dayjs(post.createdAt).format('DD MMM YYYY')}</p>
	<div class="flex flex-wrap my-4">
		<span class="text-sm mr-1 mt-0.5 text-gray-500">檔案:</span>
		{#each post.categories.data as t}
			<a href="/blog/category/{t.attributes.slug}/1" class="text-base border-b border-gray-700 text-gray-700 mr-2 mb-1">{t.attributes.name}</a>
		{/each}
	</div>
	<div class="post-body">
		{@html post.content}
	</div>
<!--	TODO-->
<!--	<div class="my-4 flex flex-wrap">-->
<!--		{#each post.tags.data as t}-->
<!--			<a href="/tag/{t.attributes.slug}/1"-->
<!--			   class="text-base bg-gray-50 px-2 py-1 mr-1 mb-1 rounded text-gray-600 border border-gray-400">{t.attributes.name}</a>-->
<!--		{/each}-->
<!--	</div>-->
</div>

<div class="mx-auto max-w-screen-md px-4 my-12">
	{#if post.related_posts.data.length}
		<h2 class="font-bold text-xl mb-4">相關文章</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
			{#each post.related_posts.data as post}
				<a href="/blog/{post.attributes.slug}" class="border border-gray-400 rounded-lg overflow-hidden">
					<div class="p-2">
						<h3 class="font-bold text-base leading-tight">{post.attributes.title}</h3>
					</div>
				</a>
			{/each}
		</div>
	{/if}
</div>