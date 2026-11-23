<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import type { Snippet } from 'svelte';

	interface TimelineMilestone {
		id: number;
		date: string;
		title: string;
		description: string;
		image?: string;
		side: 'left' | 'right';
	}

	// TODO: Sostituire con i vostri veri milestones
	const milestones: TimelineMilestone[] = [
		{
			id: 1,
			date: '[data da definire]',
			title: 'Il Primo Incontro',
			description: 'Ci siamo conosciuti per la prima volta... [inserire la vostra storia]',
			side: 'left'
		},
		{
			id: 2,
			date: '[data da definire]',
			title: 'La Prima Vacanza Insieme',
			description: 'Il nostro primo viaggio insieme... [inserire i dettagli]',
			side: 'right'
		},
		{
			id: 3,
			date: '[data da definire]',
			title: 'Un Momento Speciale',
			description: 'Un ricordo importante del nostro percorso... [inserire dettagli]',
			side: 'left'
		},
		{
			id: 4,
			date: '[data da definire]',
			title: 'La Proposta',
			description: 'Il giorno in cui ho chiesto a Eugenia di sposarmi... [inserire la storia]',
			side: 'right'
		},
		{
			id: 5,
			date: '22 Maggio 2027',
			title: 'Il Nostro Matrimonio',
			description: 'Celebreremo il nostro amore a Sorrento, circondati dalle persone a noi care.',
			side: 'left'
		}
	];

	let { children }: { children?: Snippet } = $props();

	onMount(() => {
		// Register ScrollTrigger plugin
		gsap.registerPlugin(ScrollTrigger);

		// Animate header
		gsap.from('.story-header', {
			opacity: 0,
			y: -50,
			duration: 1,
			ease: 'power3.out'
		});

		// Animate timeline items
		const timelineItems = document.querySelectorAll('.timeline-item');

		timelineItems.forEach((item, index) => {
			const isLeft = milestones[index].side === 'left';

			gsap.from(item, {
				scrollTrigger: {
					trigger: item,
					start: 'top 85%',
					end: 'top 50%',
					toggleActions: 'play none none reverse',
					// markers: true, // Uncomment for debugging
				},
				opacity: 0,
				x: isLeft ? -100 : 100,
				duration: 0.8,
				ease: 'power2.out'
			});

			// Animate the circle separately for a staggered effect
			const circle = item.querySelector('.timeline-circle');
			if (circle) {
				gsap.from(circle, {
					scrollTrigger: {
						trigger: item,
						start: 'top 85%',
						toggleActions: 'play none none reverse',
					},
					scale: 0,
					duration: 0.5,
					ease: 'back.out(1.7)',
					delay: 0.3
				});
			}
		});

		// Animate the vertical line as you scroll
		gsap.to('.timeline-line', {
			scrollTrigger: {
				trigger: '.timeline-container',
				start: 'top center',
				end: 'bottom bottom',
				scrub: 1,
			},
			scaleY: 1,
			transformOrigin: 'top center',
			ease: 'none'
		});

		// Animate bottom CTA
		gsap.from('.bottom-cta', {
			scrollTrigger: {
				trigger: '.bottom-cta',
				start: 'top 90%',
				toggleActions: 'play none none reverse',
			},
			opacity: 0,
			y: 30,
			duration: 0.8,
			ease: 'power2.out'
		});

		return () => {
			// Cleanup ScrollTrigger instances
			ScrollTrigger.getAll().forEach(trigger => trigger.kill());
		};
	});
</script>

<svelte:head>
	<title>La Nostra Storia - Luca & Eugenia</title>
</svelte:head>

<div class="min-h-screen bg-cream">
	<div class="container mx-auto px-4 py-section">
		<header class="story-header text-center mb-16">
			<h1 class="font-serif text-5xl md:text-6xl text-charcoal mb-6">La Nostra Storia</h1>
			<p class="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
				Il viaggio che ci ha portato fino a qui, fatto di momenti indimenticabili e avventure insieme.
			</p>
			<p class="font-script text-3xl text-gold mt-8">
				Avogado Travel
			</p>
		</header>

		<!-- Timeline Container -->
		<div class="timeline-container relative max-w-6xl mx-auto">
			<!-- Vertical Line (Desktop) -->
			<div class="timeline-line hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-sage/30 transform -translate-x-1/2" style="transform: scaleY(0);"></div>

			<!-- Timeline Items -->
			<div class="space-y-12 md:space-y-24">
				{#each milestones as milestone, index (milestone.id)}
					<div class="timeline-item relative" data-index={index}>
						<!-- Mobile Layout (Stacked) -->
						<div class="md:hidden">
							<div class="flex gap-4">
								<!-- Left: Date Circle -->
								<div class="flex-shrink-0 flex flex-col items-center">
									<div class="w-16 h-16 rounded-full bg-gold flex items-center justify-center text-white font-bold shadow-lg z-10">
										{index + 1}
									</div>
									{#if index < milestones.length - 1}
										<div class="w-0.5 h-full bg-sage/30 mt-2"></div>
									{/if}
								</div>

								<!-- Right: Content Card -->
								<div class="flex-grow pb-8">
									<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
										<p class="font-script text-gold text-lg mb-2">{milestone.date}</p>
										<h3 class="font-serif text-2xl text-charcoal mb-3">{milestone.title}</h3>
										<p class="text-gray-600 leading-relaxed">{milestone.description}</p>
										{#if milestone.image}
											<div class="mt-4 rounded-lg overflow-hidden">
												<img src={milestone.image} alt={milestone.title} class="w-full h-48 object-cover" />
											</div>
										{/if}
									</div>
								</div>
							</div>
						</div>

						<!-- Desktop Layout (Alternating) -->
						<div class="hidden md:grid md:grid-cols-2 md:gap-12 items-center">
							{#if milestone.side === 'left'}
								<!-- Content on Left -->
								<div class="text-right pr-8">
									<div class="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow inline-block max-w-md ml-auto">
										<p class="font-script text-gold text-xl mb-2">{milestone.date}</p>
										<h3 class="font-serif text-3xl text-charcoal mb-4">{milestone.title}</h3>
										<p class="text-gray-600 leading-relaxed text-left">{milestone.description}</p>
										{#if milestone.image}
											<div class="mt-6 rounded-lg overflow-hidden">
												<img src={milestone.image} alt={milestone.title} class="w-full h-64 object-cover" />
											</div>
										{/if}
									</div>
								</div>

								<!-- Center Circle -->
								<div class="flex justify-start pl-8">
									<div class="timeline-circle w-20 h-20 rounded-full bg-gold flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 relative -ml-10">
										{index + 1}
									</div>
								</div>
							{:else}
								<!-- Center Circle -->
								<div class="flex justify-end pr-8">
									<div class="timeline-circle w-20 h-20 rounded-full bg-gold flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 relative -mr-10">
										{index + 1}
									</div>
								</div>

								<!-- Content on Right -->
								<div class="text-left pl-8">
									<div class="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow inline-block max-w-md mr-auto">
										<p class="font-script text-gold text-xl mb-2">{milestone.date}</p>
										<h3 class="font-serif text-3xl text-charcoal mb-4">{milestone.title}</h3>
										<p class="text-gray-600 leading-relaxed">{milestone.description}</p>
										{#if milestone.image}
											<div class="mt-6 rounded-lg overflow-hidden">
												<img src={milestone.image} alt={milestone.title} class="w-full h-64 object-cover" />
											</div>
										{/if}
									</div>
								</div>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Bottom CTA -->
		<div class="bottom-cta text-center mt-20">
			<p class="font-serif text-2xl text-charcoal mb-6">
				E ora... il prossimo capitolo insieme!
			</p>
			<a
				href="/wedding-info"
				class="inline-block bg-gold hover:bg-gold-dark text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all hover:shadow-lg"
			>
				Scopri i Dettagli del Matrimonio →
			</a>
		</div>
	</div>
</div>

<style>
	.timeline-item {
		opacity: 1;
		transform: translateY(0);
	}

	/* Animation classes for GSAP to use later */
	.timeline-item.fade-in {
		animation: fadeIn 0.8s ease-out;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
