<script>
	export let data
	import EventPreview from "../../../../lib/EventPreview.svelte";
	console.log(data)
	const {
		data: events,
		meta: {
			pagination: pagination
		}
	} = data
</script>

{#each events as event}
	<EventPreview {event}/>
{/each}