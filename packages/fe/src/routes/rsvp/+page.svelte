<script lang="ts">
	// Tally.so form will be embedded here
	const tallyFormUrl = ''; // TODO: Add Tally.so form URL after creation
</script>

<svelte:head>
	<title>RSVP - Luca & Eugenia</title>
</svelte:head>

<div class="min-h-screen bg-cream">
	<div class="container mx-auto px-4 py-section">
		<header class="text-center mb-12">
			<h1 class="font-serif text-5xl md:text-6xl text-charcoal mb-6">Conferma Presenza</h1>
			<p class="font-sans text-lg text-gray-600 max-w-2xl mx-auto mb-4">
				Ci farebbe davvero piacere averti con noi!
			</p>
			<p class="text-sm text-gray-500">
				Ti chiediamo di confermare la tua presenza entro il <strong>[data da definire]</strong>
			</p>
		</header>

		<div class="max-w-3xl mx-auto">
			<!-- Tally.so Form Embed Placeholder -->
			<div class="bg-white rounded-lg shadow-md p-8">
				<div class="text-center py-12">
					<p class="text-gray-600 mb-4">Form RSVP in preparazione</p>
					<p class="text-sm text-gray-500">Utilizza Tally.so per il form di conferma</p>

					<!-- TODO: Replace with Tally.so embed -->
					<!-- Example Tally embed:
					<iframe
						data-tally-src="{tallyFormUrl}"
						loading="lazy"
						width="100%"
						height="600"
						frameborder="0"
						marginheight="0"
						marginwidth="0"
						title="RSVP Form"
					></iframe>
					<script async src="https://tally.so/widgets/embed.js"></script>
					-->
				</div>
			</div>

			<div class="mt-8 text-center">
				<a href="/wedding-info" class="text-gold hover:text-gold-dark underline">
					← Torna alle informazioni
				</a>
			</div>
		</div>
	</div>
</div>
