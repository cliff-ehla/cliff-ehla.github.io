<script>
	const VITE_IMAGE_BASE = import.meta.env.VITE_IMAGE_BASE
	export let post
	$: p = post
</script>

<a class="flex flex-col sm:flex-row">
	<div class="w-full sm:w-48 flex-shrink-0">

		<img
						src={`https://empowerhk.s3.ap-southeast-1.amazonaws.com/blog/${p.attributes.createdAt.split('T')[0]}-${p.attributes.slug}/cover.jpg`}
						alt="missing image!">


		<!--{#if p.attributes.image.data}-->
		<!--	<img class="rounded-xl border border-gray-300 shadow-xl" src="{p.attributes.image.data.attributes.url}" alt="{p.attributes.title}">-->
		<!--{:else}-->
		<!--	<img class="rounded-xl border border-gray-300 shadow-xl" src="{VITE_IMAGE_BASE}{p.attributes.wp_thumb_url}" alt="{p.attributes.title}">-->
		<!--{/if}-->
	</div>
	<div class="ml-0 sm:ml-4 mt-2 sm:mt-0">
		<h2 class="text-lg leading-tight font-bold">
			<a href="/art-notes/{p.attributes.slug}">
				{p.attributes.title}
			</a>
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
					<a href="/art-notes/category/{t.attributes.slug}/1" class="text-sm border-b border-gray-700 text-gray-700 mr-2 mb-1">{t.attributes.name}</a>
				{/each}
			</div>
		{/if}

		{#if p.attributes.tags}
			<div class="flex flex-wrap">
				{#each p.attributes.tags.data as t}
					<a href="/tag/{t.attributes.slug}/1" class="text-xs px-1 bg-gray-200 text-blue-900 italic rounded border-gray-200 border mr-2 mb-1">{t.attributes.name}</a>
				{/each}
			</div>
		{/if}
	</div>
</a>