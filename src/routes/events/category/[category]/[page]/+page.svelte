<script>
	export let data
	import EventPreview from "$lib/EventPreview.svelte";
	console.log(data)
	$: events = data.data
	$: pagination = data.meta.pagination
</script>

<div class="mx-auto p-4 max-w-screen-lg">
	{#each events as event}
		<EventPreview {event}/>
	{/each}
</div>