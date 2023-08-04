<script>
	import PostPreview from "$lib/PostPreview.svelte";
	export let data
	$: posts = data.data
	let pagination = data.meta.pagination
	import {page} from "$app/stores";
</script>

<div class="mx-auto p-4 max-w-screen-lg">
	<div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
		{#each posts as post}
			<PostPreview {post}/>
		{/each}
	</div>
	<div class="bg-gray-50 mt-6 py-6 border-t border-gray-300">
		<div class="container flex flex-wrap justify-center">
			{#each Array.from({length: pagination.pageCount}, (v, i) => i) as i}
				<a class="text-xs flex justify-center items-center w-8 h-8 rounded-full bg-gray-100 border border-gray-300 m-1"
				   href="/blog/category/{$page.params.category}/{i+1}">{i + 1}</a>
			{/each}
		</div>
	</div>
</div>