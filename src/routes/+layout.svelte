<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../index.css';
	import 'carbon-components-svelte/css/all.css';
	import {Toggle} from 'carbon-components-svelte'

	const theme = 'white';

	$effect(() => {
		document.documentElement.setAttribute('theme', theme);
	});

	const {
		children
	}: {
		children: Snippet;
	} = $props();
</script>

<div class="min-h-screen h-screen">
	{@render children()}
</div>

<Toggle class="fixed bottom-0 right-0" toggled />
