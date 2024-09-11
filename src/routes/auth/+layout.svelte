<script lang="ts">
	import Logo from '$lib/components/logo.svelte';
	import type { Snippet } from 'svelte';

	const { children }: { children: Snippet } = $props();
</script>

<div class="h-full w-full px-6 flex flex-col">
	<header class="w-full py-4">
		<Logo size="small" />
	</header>

	<main class="w-full sm:w-1/2 py-4 flex-1 flex flex-col justify-start">
		<div class="flex-1">{@render children()}</div>

		<aside class="text-xs">
			<p>
				By using this application, you accept our <a
					class="underline underline-offset-4"
					href="settings/terms">Terms and conditions</a
				>
			</p>
		</aside>
	</main>
</div>
