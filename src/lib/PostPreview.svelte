<script>
	const VITE_IMAGE_BASE = import.meta.env.VITE_IMAGE_BASE
	export let post
	$: p = post
</script>

<a href="/blog/{p.attributes.slug}" class="flex flex-col sm:flex-row">
	<div class="w-full sm:w-48 flex-shrink-0">
		{#if post.attributes.image.data}
			<img
							src={post.attributes.image.data.attributes.formats.small.url}
							alt={p.attributes.title}>
		{:else}
			<img
							src={`${VITE_IMAGE_BASE}/blog/${p.attributes.createdAt.split('T')[0]}-${p.attributes.slug}/cover.jpg`}
							alt={p.attributes.title}>
		{/if}
	</div>
	<div class="ml-0 sm:ml-4 mt-2 sm:mt-0">
		<h2 class="text-lg leading-tight font-bold">
			{p.attributes.title}
		</h2>
		<div class="flex items-center">
			{#if p.attributes.author.data}
				{p.attributes.author.data.attributes.name}
			{/if}
		</div>
		{#if p.attributes.categories}
			<div class="flex flex-wrap">
				<span class="text-xs mr-1 mt-0.5 text-gray-500">檔案:</span>
				{#each p.attributes.categories.data as t}
					<a href="/blog/category/{t.attributes.slug}/1" class="text-sm border-b border-gray-700 text-gray-700 mr-2 mb-1">{t.attributes.name}</a>
				{/each}
			</div>
		{/if}

		{#if p.attributes.tags}
			<div class="flex flex-wrap">
				{#each p.attributes.tags.data as t}
					<span class="text-xs px-1 bg-gray-200 text-blue-900 italic rounded border-gray-200 border mr-2 mb-1">{t.attributes.name}</span>
				{/each}
			</div>
		{/if}
	</div>
</a>