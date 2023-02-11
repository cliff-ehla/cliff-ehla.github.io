<script>
	export let data
	import EventPreview from "$lib/EventPreview.svelte";
	console.log(data)
	const {
		data: events,
		meta: {
			pagination: pagination
		}
	} = data
</script>

<div class="mx-auto p-4 max-w-screen-lg">
	{#each events as event}
		<EventPreview {event}/>
	{/each}
</div>