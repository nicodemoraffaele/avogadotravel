<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	// 22 maggio 2027 ore 16:00, ora italiana. A maggio in Italia vale l'ora legale
	// (CEST, UTC+2): l'offset esplicito rende il conteggio indipendente dal fuso
	// orario del dispositivo e del server.
	const WEDDING_TIME = Date.parse('2027-05-22T16:00:00+02:00');

	// Differenza tra l'orologio del server e quello del dispositivo. Il sito è
	// statico (GitHub Pages), quindi l'ora del server si legge dall'intestazione
	// HTTP "Date" della risposta; se non è disponibile si usa l'orologio locale.
	let clockOffset = 0;
	const now = () => Date.now() + clockOffset;

	async function syncWithServerClock() {
		try {
			const sentAt = Date.now();
			const res = await fetch(`${base}/`, { method: 'HEAD', cache: 'no-store' });
			const receivedAt = Date.now();
			const serverDate = Date.parse(res.headers.get('date') ?? '');
			if (Number.isNaN(serverDate)) return;
			// "Date" ha la precisione del secondo: +500ms ne stima il valore medio.
			clockOffset = serverDate + 500 - (sentAt + receivedAt) / 2;
		} catch {
			// rete non disponibile: resta l'orologio del dispositivo
		}
	}

	const SECOND = 1000;
	const MINUTE = 60 * SECOND;
	const HOUR = 60 * MINUTE;
	const DAY = 24 * HOUR;

	function remaining() {
		const diff = Math.max(0, WEDDING_TIME - now());
		return {
			isFuture: diff > 0,
			days: Math.floor(diff / DAY),
			hours: Math.floor((diff % DAY) / HOUR),
			minutes: Math.floor((diff % HOUR) / MINUTE),
			seconds: Math.floor((diff % MINUTE) / SECOND),
		};
	}

	let countdown = $state(remaining());
	// Il countdown dell'HTML statico è quello del momento del build: i numeri
	// compaiono solo quando la pagina è attiva nel browser.
	let ready = $state(false);

	type ProgramIcon = 'arrival' | 'rings' | 'cheers' | 'dinner' | 'party';

	const program: { time: string; label: string; icon: ProgramIcon }[] = [
		{ time: '15:30', label: 'Arrivo ospiti', icon: 'arrival' },
		{ time: '16:00', label: 'Cerimonia', icon: 'rings' },
		{ time: '17:00', label: 'Aperitivo', icon: 'cheers' },
		{ time: '20:30', label: 'Cena', icon: 'dinner' },
		{ time: '00:00', label: 'Festa', icon: 'party' },
	];

	onMount(() => {
		const tick = () => (countdown = remaining());
		tick();
		ready = true;
		syncWithServerClock().then(tick);
		const interval = setInterval(tick, 1000);
		return () => clearInterval(interval);
	});
</script>

{#snippet icon(name: ProgramIcon)}
	<svg
		class="h-12 w-12 text-charcoal md:h-14 md:w-14"
		viewBox="0 0 48 48"
		fill="none"
		stroke="currentColor"
		stroke-width="1.4"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		{#if name === 'arrival'}
			<!-- envelope -->
			<rect x="8" y="13" width="32" height="22" rx="2" />
			<path d="M8 15l16 12 16-12" />
			<path d="M24 22c-1.6-1.8-4.2-.6-3.6 1.4.4 1.4 3.6 3.6 3.6 3.6s3.2-2.2 3.6-3.6c.6-2-2-3.2-3.6-1.4z" />
		{:else if name === 'rings'}
			<circle cx="18" cy="29" r="10" />
			<circle cx="30" cy="29" r="10" />
			<path d="M15 15l3-5 3 5-3 3.5z" />
		{:else if name === 'cheers'}
			<path d="M13 8h9l-1 10a3.6 3.6 0 01-7 0z" />
			<path d="M17.5 21.5V36M13 36h9" />
			<path d="M27 10l8.8 2.2-3.2 9.4a3.6 3.6 0 01-6.8-1.7z" />
			<path d="M29.3 23.4L26 37.4M21.7 36.2l8.7 2.2" />
			<path d="M24 4v2M30 5l-1 1.6M36 6l-1.6 1.2" />
		{:else if name === 'dinner'}
			<path d="M8 34h32" />
			<path d="M11 34a13 13 0 0126 0" />
			<path d="M24 21v-2M22 19h4" />
			<path d="M6 38h36" />
		{:else}
			<!-- disco ball -->
			<path d="M24 4v8" />
			<circle cx="24" cy="26" r="13" />
			<path d="M11 26h26M13 19h22M13 33h22" />
			<path d="M24 13c-5 4-5 22 0 26M24 13c5 4 5 22 0 26" />
			<path d="M39 8l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" />
		{/if}
	</svg>
{/snippet}

<svelte:head>
	<title>Luca & Eugenia - Avogado Travel</title>
</svelte:head>

<div class="bg-sand">
	<!-- Hero -->
	<section class="relative overflow-hidden px-4 pb-20 pt-12 md:pt-16">
		<div class="mx-auto max-w-5xl text-center">
			<p
				class="animate-fade-in font-serif text-4xl uppercase tracking-[0.18em] text-cream-light drop-shadow-sm md:text-6xl"
			>
				Luca & Eugenia
			</p>
			<p class="mt-1 font-script text-4xl text-charcoal/80 md:text-5xl">Avogado Travel</p>
			<div
				class="mx-auto mt-6 inline-block rounded-full bg-taupe px-10 py-3 font-serif text-2xl tracking-[0.12em] text-cream-light shadow-md md:text-3xl"
			>
				22 · 05 · 2027
			</div>
		</div>

		<!-- Invitation card -->
		<div
			class="relative mx-auto mt-12 max-w-md animate-slide-up rounded-[2.5rem] bg-cream-light px-6 pb-10 pt-6 shadow-xl md:px-10"
		>
			<!-- Arch photo -->
			<div class="mx-auto rounded-t-full border border-gold/60 p-2">
				<div class="relative aspect-[4/3] w-full overflow-hidden rounded-t-full">
					<!-- inquadra solo la tela con la luna (l'immagine originale include la stanza) -->
					<img
						src="{base}/images/immagine_home.jpg"
						alt="Due persone sedute su un furgoncino sotto una grande luna piena"
						class="absolute left-[-6%] top-[-6%] h-auto w-[132%] max-w-none"
					/>
				</div>
			</div>

			<p class="mt-6 text-center font-script text-6xl leading-none text-gold">Ci sposiamo</p>

			<p class="mx-auto mt-5 max-w-xs text-center font-serif text-base italic tracking-wide text-sage-dark">
				Siete calorosamente invitati a festeggiare insieme a noi il nostro matrimonio
			</p>

			<div class="mt-6 text-center">
				<p class="font-serif text-4xl uppercase tracking-[0.2em] text-charcoal">Luca</p>
				<p class="my-1 font-script text-4xl text-gold">e</p>
				<p class="font-serif text-4xl uppercase tracking-[0.2em] text-charcoal">Eugenia</p>
			</div>

			<div class="mt-8 space-y-1 text-center font-serif uppercase tracking-[0.3em] text-sage-dark">
				<p class="text-sm">Sabato</p>
				<p class="text-2xl text-charcoal">22 Maggio 2027</p>
				<p class="text-sm">ore 16:00</p>
				<p class="text-sm">Sorrento</p>
			</div>
		</div>

		<!-- Countdown -->
		{#if countdown.isFuture}
			<div class="mx-auto mt-14 max-w-2xl text-center">
				<p class="mb-6 font-script text-4xl text-charcoal/80">Mancano solo...</p>
				<div class="flex justify-center gap-3 md:gap-6">
					{#each [{ v: countdown.days, l: 'Giorni' }, { v: countdown.hours, l: 'Ore' }, { v: countdown.minutes, l: 'Min' }, { v: countdown.seconds, l: 'Sec' }] as unit}
						<div class="min-w-[72px] rounded-2xl bg-cream-light p-4 shadow-md md:min-w-[96px] md:p-6">
							<div class="font-serif text-3xl font-semibold text-gold md:text-4xl">{ready ? unit.v : '–'}</div>
							<div class="mt-1 font-serif text-xs uppercase tracking-[0.25em] text-sage-dark">
								{unit.l}
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</section>

	<!-- Program -->
	<section class="px-4 pb-24">
		<div class="mx-auto max-w-xl rounded-[2.5rem] bg-cream-light px-4 py-12 shadow-xl sm:px-6 md:px-12">
			<p class="text-center font-serif text-xl uppercase tracking-[0.35em] text-sage">Il</p>
			<h2 class="-mt-1 text-center font-script text-5xl leading-tight text-charcoal/80 sm:-mt-2 sm:text-7xl">Programma</h2>

			<ol class="relative mx-auto mt-10 max-w-sm">
				<!-- vertical line -->
				<span class="absolute bottom-2 left-1/2 top-2 w-[3px] -translate-x-1/2 rounded bg-gold" aria-hidden="true"
				></span>

				{#each program as item, i}
					<li class="relative grid grid-cols-2 items-center py-5">
						<span
							class="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-charcoal"
							aria-hidden="true"
						></span>

						<div class="flex {i % 2 === 0 ? 'justify-end pr-8' : 'order-2 justify-start pl-8'}">
							{@render icon(item.icon)}
						</div>
						<div class={i % 2 === 0 ? 'pl-8 text-left' : 'order-1 pr-8 text-right'}>
							<p class="font-serif text-lg font-semibold tracking-wider text-charcoal">{item.time}</p>
							<p class="font-serif text-xs uppercase tracking-[0.25em] text-sage-dark">{item.label}</p>
						</div>
					</li>
				{/each}
			</ol>
		</div>
	</section>

	<!-- Location -->
	<section class="bg-cream-light py-section">
		<div class="container mx-auto px-4 text-center">
			<p class="font-script text-4xl text-gold">dove</p>
			<h2 class="font-serif text-4xl uppercase tracking-[0.15em] text-charcoal">Sorrento</h2>
			<div class="mx-auto mt-10 grid max-w-3xl gap-6 text-left md:grid-cols-2">
				<div class="rounded-3xl bg-cream p-6 text-center shadow-sm">
					<p class="font-serif text-sm uppercase tracking-[0.3em] text-sage">Cerimonia</p>
					<p class="mt-2 font-serif text-2xl text-charcoal">Chiesa da definire</p>
					<p class="font-serif text-base italic text-sage-dark">Sorrento (NA) · ore 16:00</p>
				</div>
				<div class="rounded-3xl bg-cream p-6 text-center shadow-sm">
					<p class="font-serif text-sm uppercase tracking-[0.3em] text-sage">Ricevimento</p>
					<p class="mt-2 font-serif text-2xl text-charcoal">Location da definire</p>
					<p class="font-serif text-base italic text-sage-dark">Sorrento (NA)</p>
				</div>
			</div>
		</div>
	</section>
</div>
