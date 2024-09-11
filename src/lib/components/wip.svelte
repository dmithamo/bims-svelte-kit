<script lang="ts">
	import Logo from '$lib/components/logo.svelte';

	const { pageName }: { pageName: string } = $props();
</script>

<div class="flex flex-col items-center justify-center h-screen gap-2 p-4">
	<h1 class="text-3xl text-accent font-black">Welcome to BIMS</h1>
	<p class="text-base">Work in Progress. Check back later&TRADE;</p>

	<strong class="font-bold">Page name: {pageName}</strong>

	<button class="btn btn-primary uppercase">Daisy UI btn</button>
	<small class="bg-error/20 text-error border-2 border-error rounded-md p-4 w-full"
		>This is an error</small
	>
	<Logo />
</div>
