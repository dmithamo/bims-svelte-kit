<script lang="ts">
	import Logo from '$lib/components/logo.svelte';
	import type { Snippet } from 'svelte';

	const APP_VERSION = import.meta.env.VITE_APP_VERSION;
	const currentYear = new Date().getFullYear();
	const COPYRIGHT_START_YEAR = 2024;

	let {
		children
	}: {
		children: Snippet;
	} = $props();
</script>

<div class="min-h-screen">
	{@render children()}
</div>

<footer
	class="w-full flex flex-col justify-center items-center p-6 gap-2 bg-sDark text-pDark border-t border-t-pDark"
>
	<p class="">
		Designed and developed by <a
			class="underline underline-offset-2"
			target="_blank"
			rel="noreferrer noopener"
			href="https://dmithamo.dev">D Mithamo</a
		>
	</p>
	<p class="block text-center">
		&copy; {currentYear === COPYRIGHT_START_YEAR
			? COPYRIGHT_START_YEAR
			: `${COPYRIGHT_START_YEAR} - ${currentYear}`}
	</p>

	<p class="block text-center">
		This is version <strong class="underline underline-offset-2 decoration-dotted"
			>{APP_VERSION}</strong
		>
	</p>
	<Logo />
</footer>
