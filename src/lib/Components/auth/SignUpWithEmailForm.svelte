<script lang="ts">
	import { goto } from '$app/navigation';
	import { pb } from '$lib/Services/PocketbaseWrapper';
	import type { ValidationErrors } from '$lib/types/pb';
	import CfButton from '../CFButton.svelte';
	import logo from '$lib/Images/an_logo.png';
	import { fade, fly } from 'svelte/transition';
	let errors: ValidationErrors;
	let message: string;
	let identity: string;
	let password: string;
	let passwordConfirm: string;
	let privacy_policy: boolean;

	const signup = async () => {
		try {
			if (password !== passwordConfirm) {
				return;
			}
			if (!privacy_policy) {
				return;
			}
			const result = await pb.collection('users').create({
				email: identity,
				password,
				passwordConfirm
			});

			const authData = await pb.collection('users').authWithPassword(identity, password);
			if (await authData.token) {
				goto('/app/');
			}
		} catch (e) {}
	};
</script>

<div class="flex flex-col items-center mx-auto pb-8 gap-4">
	<img class="w-24 h-24" alt="ClimateFriday logo" src={logo} />
	<h1 class="font-serif text-center font-bold text-2xl text-neutral-900">Account anlegen</h1>
	<span class="font-sans text-center text-neutral-800"
		>Schon dabei? <a href="/app/auth/withEmail" class="text-primary-500 hover:text-primary-700"
			>Anmelden</a
		></span
	>
</div>

<form
	class="flex flex-col mx-auto bg-neutral-50 rounded-md shadow-md px-8 py-4"
	in:fly={{ y: 100 }}
>
	<fieldset>
		<legend class="sr-only">Account anlegen</legend>

		{#if message}
			<div class="text-center italic text-error-500 w-[16rem]">
				{message}
			</div>
		{/if}

		<div class="form-control w-[16rem]">
			<label class="label" for="email">
				<span class="label-text">Email</span>
			</label>
			<input
				type="text"
				placeholder="Email"
				class="input input-bordered w-[16rem]"
				id="email"
				bind:value={identity}
			/>
			{#if errors && errors.identity}
				<label class="label" for="email">
					<span class="text-xs text-error-500 italic">*{errors.identity.message}</span>
				</label>
			{/if}
		</div>

		<div class="form-control w-[16rem]">
			<label class="label" for="password">
				<span class="label-text">Passwort</span>
			</label>
			<input
				placeholder=""
				class="input input-bordered w-[16rem]"
				type="password"
				id="password"
				bind:value={password}
			/>
			{#if errors && errors.password}
				<label class="label" for="email">
					<span class="text-xs text-error-500 italic">*{errors.password.message}</span>
				</label>
			{/if}
		</div>

		<div class="form-control w-[16rem]">
			<label class="label" for="password">
				<span class="label-text">Passwort bestätigen</span>
			</label>
			<input
				placeholder=""
				class="input input-bordered w-[16rem]"
				type="password"
				id="passwordConfirm"
				bind:value={passwordConfirm}
			/>
			{#if errors && errors.password}
				<label class="label" for="email">
					<span class="text-xs text-error-500 italic">*{errors.password.message}</span>
				</label>
			{/if}
		</div>
		<div class="py-4 w-[16rem]">
			<input type="checkbox" id="privacy_policy" bind:checked={privacy_policy} />
			<label for="privacy_policy"> Privacy thing </label>
		</div>
		<div class="form-control w-[16rem] py-4 gap-4">
			<CfButton onclick={() => signup()}>Account anlegen</CfButton>
		</div>
	</fieldset>
</form>

<style lang="scss">
	// input[type='check-box'] {
	// 	border: 1px solid black;
	// 	display: flex;
	// }
</style>
