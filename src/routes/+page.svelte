<script>
	export let data
	import EventPreview from "$lib/EventPreview.svelte";
	import PostPreview from "../lib/PostPreview.svelte";
	const {events, posts} = data
</script>

<div class="container">
	<h2 class="text-2xl px-4">近期活動</h2>
	<div class="mx-auto p-4 max-w-screen-lg">
		{#each events as event}
			<EventPreview {event}/>
		{/each}
	</div>
	<a class="mx-2 px-4 py-1 rounded text-blue-500 hover:bg-blue-50 border-current block border text-center"
	   href="/events/category/all/1">查看全部活動</a>
	<h2 class="text-2xl px-4 mt-4">近期文章</h2>
	<div class="mx-auto p-4 max-w-screen-lg">
		{#each posts as post}
			<PostPreview {post}/>
		{/each}
	</div>
	<a class="mx-2 px-4 py-1 rounded text-blue-500 hover:bg-blue-50 border-current block border text-center"
	   href="/blog/category/all/1">查看全部文章</a>
</div>