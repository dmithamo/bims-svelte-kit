<script lang="ts">
	import logo from '$lib/assets/bims-logo.svg';
	const { size = '' }: { size?: '' | 'small' | 'large' } = $props();

	const sizeClass: () => string = $derived(() => {
		switch (size) {
			case 'small':
				return 'h-[50px] w-[50px]';
			default:
				return 'h-[100px] w-[100px]';
		}
	});
</script>

<img class={sizeClass()} src={logo} alt="Logo" />
