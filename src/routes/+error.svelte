<script>
	import { page } from '$app/stores';
	import Logo from '$lib/components/logo.svelte';
</script>

<div class="flex flex-col items-center justify-center relative h-full gap-4">
	<Logo />
	<h1 class="text-3xl text-error">Bims | Error {$page.status}</h1>

	<p class="mt-4 text-error">
		{$page?.error?.message || 'Something went very wrong. Check back later&TRADE;'}
	</p>
</div>

<svelte:head>
	<title>Bims | Error | {$page.status}</title>
</svelte:head>
