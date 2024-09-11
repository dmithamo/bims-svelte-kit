<script lang="ts">
	import Logo from '$lib/components/logo.svelte';
	import type { Snippet } from 'svelte';

	const { children }: { children: Snippet } = $props();
</script>

<div class="h-full w-full px-6 flex flex-col">
	<header class="w-full py-4">
		<Logo size="small" />
	</header>

	<main class="w-full py-4 flex-1 flex flex-col justify-start sm:items-center">
		<div class="flex-1 w-full sm:w-[400px]">{@render children()}</div>

		<aside class="text-xs">
			<p>
				By using this application, you accept the <a
					class="underline underline-offset-4"
					href="/settings/terms">terms and conditions</a
				>
			</p>
		</aside>
	</main>
</div>
