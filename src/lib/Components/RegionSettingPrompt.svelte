<script>
	import { onMount } from 'svelte';
	import { pb } from '$lib/Services/PocketbaseWrapper';
	import Modal from '$lib/Components/Modal.svelte';
	import CFSectionHeading from '$lib/Components/CFSectionHeading.svelte';
	import ClimateFriday from '$lib/Components/ClimateFriday.svelte';
	import { fade } from 'svelte/transition';
	import CFButton from '$lib/Components/CFButton.svelte';

	let plz;
	onMount(async () => {
		const userReccord = await pb.collection('users').getOne(pb.authStore.model?.id);
		plz = userReccord.region;
		console.log(plz);
	});

	const savePlz = async () => {
		let rec = await pb.collection('users').update(pb.authStore.model?.id, { region: plz });
		success = true;
		setTimeout(
			() => {
				success = false;
				modal.hide();
			},
			2000);
	};

	let modal;

	let success = false;
</script>


{#if !plz}
	<div>
		<CFSectionHeading>Postleitzahl</CFSectionHeading>
		<p>
			Mach dein Postleitzahlengebiet zu einer starken
			<ClimateFriday />
			-Region und lass uns wissen wo du wohnst.
		</p>
		<div class="text-center ">
			<CFButton transparent onclick={() => modal.show()}>Jetzt einrichten</CFButton>

		</div>
	</div>
{/if}

<Modal bind:this={modal}>
	<div class="flex-col flex gap-4 ">
		<CFSectionHeading>
			Postleitzahl
		</CFSectionHeading>
		<p>
			Mach dein Postleitzahlengebiet zu einer starken
			<ClimateFriday />
			-Region und lass uns wissen wo du wohnst.
		</p>
		<label class="label" for="plz">
			<span class="label-text">Postleitzahl</span>
			{#if success}
				<span transition:fade class="label-text text-success-700">Gespeichert!</span>
			{/if}
		</label>
		<input
			type="text"
			placeholder="bsp. 12345"
			class="input input-bordered"
			id="plz"
			bind:value={plz}
		/>
		<button class="text-right underline font-bold" on:click={savePlz}>Speichern</button>
	</div>
</Modal>