<script lang="ts">
	import { goto } from '$app/navigation';
	import ClimateFriday from '$lib/Components/ClimateFriday.svelte';

	let numberOfRegisteredUsers = 1000;
</script>

<!-- bg -->
<div aria-hidden="true" class="sticky left-0 top-0 right-0 ws-gradient ws-gradient-top w-full">
	<h1 class="font-bold fixed left-0 right-0 top-32 text-center text-4xl -rotate-12">
		Willkommen beim <ClimateFriday />
	</h1>
</div>
<div
	aria-hidden="true"
	class="fixed left-0 bottom-0 right-0 ws-gradient ws-gradient-bottom flex flex-col justify-end -z-10"
/>
<!-- end bg -->

<main
	class="top-0 left-0 right-0 absolute px-6 pt-10 mx-auto text-lg flex flex-col gap-4 justify-center max-w-lg min-h-full h-screen"
>
	<div>
		Schon <span class="font-bold"> <!-- {numberOfRegisteredUsers} --> ganz viele ;) </span>  sind beim <ClimateFriday/> dabei.
	</div>

	<div>
		Wir zeigen <b>freitags</b> Flagge für Tempo und Gerechtigkeit beim Klimaschutz. Wir fordern dies von
		den Regierungen und sind selber dazu bereit.
	</div>

	<div>
		Super, dass auch du zum <ClimateFriday /> gefunden hast!
	</div>
</main>

<div class="fixed bottom-0 right-0 flex flex-row justify-end p-8">
	<button class="bg-slate-50 px-8 py-4 font-bold rounded-full flex gap-4 shadow-md" on:click={() => goto('/app/auth/')}>
		Ich mach mit
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
				 class="w-6 h-6">
			<path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
		</svg>
	</button>
</div>

<style lang="scss">
	.ws-gradient {
		background-blend-mode: overlay;
		background-size: cover;
		background-repeat: no-repeat;
		--background-color: rgba(255, 255, 255, 1);
		--angle: -12deg;
		height: 16rem;
	}
	.ws-gradient-top {
		background-image: url('/warming_stripes.png'),
			linear-gradient(
				var(--angle),
				var(--background-color) 50%,
				rgba(131, 58, 180, 0) 50.2%,
				rgba(131, 58, 180, 0) 100%
			);
	}

	.ws-gradient-bottom {
		background-image: url('/warming_stripes.png'),
			linear-gradient(
				calc(180deg + var(--angle)),
				var(--background-color) 50%,
				rgba(131, 58, 180, 0) 50.2%,
				rgba(131, 58, 180, 0) 100%
			);
	}
</style>
