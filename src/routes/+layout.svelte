<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../index.css';

	let {
		children
	}: {
		children: Snippet;
	} = $props();
</script>

<div class="min-h-screen p-4">
	{@render children()}
</div>

<style lang="postcss">
	:global(html) {
		font-size: theme(fontSize.base);
		background-color: theme(colors.sLight);
		color: theme(colors.pLight);
		@media (prefers-color-scheme: dark) {
			background-color: theme(colors.sDark);
			color: theme(colors.pDark);
		}
	}
</style>
