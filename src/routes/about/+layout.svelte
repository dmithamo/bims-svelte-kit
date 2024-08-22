<script lang="ts">
	import Logo from '$lib/components/logo.svelte';
	import type { Snippet } from 'svelte';

	const APP_VERSION = import.meta.env.VITE_APP_VERSION;

	let {
		children
	}: {
		children: Snippet;
	} = $props();
</script>

<div class="min-h-screen">
	{@render children()}
</div>

<footer class="w-full flex flex-col justify-center items-center p-4">
	<p class="opacity-45">
		Designed and developed by <a
			class="underline underline-offset-2"
			target="_blank"
			rel="noreferrer noopener"
			href="https://dmithamo.dev">D Mithamo</a
		>
		<small class="block text-center">v{APP_VERSION}</small>
	</p>
	<Logo />
</footer>
