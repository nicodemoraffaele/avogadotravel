<script lang="ts">
	const weddingDate = '2027-05-22T16:00:00';
	const rsvpDeadline = '2026-03-01';
</script>

<div class="min-h-screen bg-cream">
	<div class="container mx-auto px-4 py-section">
		<header class="text-center mb-16">
			<h1 class="font-serif text-5xl md:text-6xl text-charcoal mb-6">Informazioni</h1>
			<p class="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
				Tutte le informazioni utili per la giornata del matrimonio.
			</p>
		</header>

		<div class="max-w-4xl mx-auto space-y-12">
			<!-- Quando -->
			<section class="bg-white rounded-lg shadow-sm p-8">
				<h2 class="font-serif text-3xl text-charcoal mb-6">📅 Quando</h2>
				<p class="text-xl text-charcoal mb-4">Sabato 22 Maggio 2027</p>
				<div class="space-y-2 text-gray-600">
					<p><strong>15:30</strong> - Arrivo ospiti</p>
					<p><strong>16:00</strong> - Cerimonia</p>
					<p><strong>17:00</strong> - Aperitivo</p>
					<p><strong>20:30</strong> - Cena</p>
					<p><strong>00:00</strong> - Festa</p>
				</div>
			</section>

			<!-- Dove -->
			<section class="bg-white rounded-lg shadow-sm p-8">
				<h2 class="font-serif text-3xl text-charcoal mb-6">📍 Dove</h2>
				<div class="space-y-4">
					<div>
						<h3 class="font-semibold text-lg text-charcoal mb-2">Cerimonia</h3>
						<p class="text-gray-600">Chiesa da definire</p>
						<p class="text-sm text-gray-500">Sorrento (NA)</p>
					</div>
					<div>
						<h3 class="font-semibold text-lg text-charcoal mb-2">Ricevimento</h3>
						<p class="text-gray-600">Location da definire</p>
						<p class="text-sm text-gray-500">Sorrento (NA)</p>
					</div>
				</div>
			</section>

			<!-- Dress Code -->
			<section class="bg-white rounded-lg shadow-sm p-8">
				<h2 class="font-serif text-3xl text-charcoal mb-6">👔 Dress Code</h2>
				<p class="text-gray-600">Elegante / Semi-formale</p>
			</section>

			<!-- RSVP Info -->
			<section class="bg-gold-light rounded-lg shadow-sm p-8 text-center">
				<h2 class="font-serif text-3xl text-charcoal mb-4">Conferma la tua presenza</h2>
				<p class="text-gray-700 mb-6">Ti chiediamo di confermare entro il <strong>1 Marzo 2026</strong></p>
				<a
					href="/rsvp"
					class="inline-block bg-gold hover:bg-gold-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors"
				>
					RSVP
				</a>
			</section>
		</div>
	</div>
</div>
