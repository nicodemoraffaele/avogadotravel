<script lang="ts">
	import { onMount } from 'svelte';
	import { setLocale } from '$lib/i18n/i18n-svelte';
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import type { Snippet } from 'svelte';
	import '../app.postcss';
	import type { LayoutData } from './$types';
	import Lenis from 'lenis';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();

	setLocale(data.locale);

	let mobileMenuOpen = $state(false);

	// Per ora il sito ha una sola pagina: le altre route sono nascoste
	// (hidden: true) e reindirizzano alla home. Basta togliere il flag per riattivarle.
	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/our-story', label: 'La Nostra Storia', hidden: true },
		{ href: '/wedding-info', label: 'Informazioni', hidden: true },
		{ href: '/rsvp', label: 'RSVP', hidden: true },
	].filter((link) => !link.hidden);

	const showMenu = navLinks.length > 1;

	function isActive(href: string): boolean {
		return $page.url.pathname === base + href || $page.url.pathname === `${base}${href}/`;
	}

	// Initialize Lenis smooth scrolling
	onMount(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			orientation: 'vertical',
			gestureOrientation: 'vertical',
			smoothWheel: true,
			wheelMultiplier: 1,
			touchMultiplier: 2,
		});

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	});
</script>

<!-- Navigation -->
<nav class="fixed top-0 w-full bg-cream-light/90 backdrop-blur-sm shadow-sm z-50">
	<div class="container mx-auto px-4">
		<div class="flex items-center {showMenu ? 'justify-between' : 'justify-center'} h-16">
			<!-- Logo / Monogram -->
			<a href="{base}/" class="font-display text-3xl text-gold hover:text-gold-dark transition-colors">
				E & L
			</a>

			{#if showMenu}
			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center space-x-8">
				{#each navLinks as link}
					<a
						href={base + link.href}
						class="font-sans text-sm font-medium transition-colors {isActive(link.href)
							? 'text-gold'
							: 'text-charcoal hover:text-gold'}"
					>
						{link.label}
					</a>
				{/each}
			</div>

			<!-- Mobile Menu Button -->
			<button
				class="md:hidden p-2"
				onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
				aria-label="Toggle menu"
			>
				<svg class="w-6 h-6 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					{#if mobileMenuOpen}
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					{:else}
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					{/if}
				</svg>
			</button>
			{/if}
		</div>
	</div>

	<!-- Mobile Menu -->
	{#if showMenu && mobileMenuOpen}
		<div class="md:hidden bg-cream-light border-t">
			<div class="container mx-auto px-4 py-4 space-y-3">
				{#each navLinks as link}
					<a
						href={base + link.href}
						class="block font-sans text-base font-medium transition-colors {isActive(link.href)
							? 'text-gold'
							: 'text-charcoal hover:text-gold'}"
						onclick={() => (mobileMenuOpen = false)}
					>
						{link.label}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>

<!-- Main Content (with top padding for fixed nav) -->
<main class="pt-16">
	{@render children()}
</main>

<!-- Footer -->
<footer class="bg-charcoal text-white py-12">
	<div class="container mx-auto px-4 text-center">
		<p class="font-display text-5xl text-gold-light mb-4">E & L</p>
		<p class="font-sans text-sm text-sand mb-2">22 Maggio 2027 • Sorrento</p>
		<p class="font-script text-2xl text-cream mt-4">Avogado Travel</p>
	</div>
</footer>
