<script>
	export let data
	const {posts} = data
</script>

{#each posts as post}
	<p>{post.attributes.title}</p>
{/each}

