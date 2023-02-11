<script>
	export let data
	const {categories, event_categories} = data
	import "../app.css";
	import Header from '$lib/header/index.svelte'
</script>
<Header {categories} {event_categories}/>
<slot></slot>