<script lang="ts">
	import Logo from '$lib/components/logo.svelte';

	const { pageName }: { pageName: string } = $props();
</script>

<div class="flex flex-col items-center justify-center h-screen gap-2">
	<h1 class="text-3xl text-aLight dark:text-aDark">Welcome to BIMS</h1>
	<small>Work in Progress. Check back later&TRADE;</small>

	<strong class="text-xs">Page name: {pageName}</strong>
	<Logo />
</div>
