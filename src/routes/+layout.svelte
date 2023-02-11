<script>
	import "../app.css";
	import Header from '$lib/header/index.svelte'
</script>
<Header/>
<div class="flex">
	<a href="/blog/page/1">blog</a>
	<a href="/events/page/1">events</a>
</div>

<slot></slot>