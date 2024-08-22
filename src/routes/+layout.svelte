<script>
	import '../index.css';
</script>

<slot />

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
