import { loadLocaleAsync } from '$lib/i18n/i18n-util.async';

import type { LayoutLoad } from './$types';

// Tutte le pagine vengono generate in HTML statico al build (GitHub Pages).
export const prerender = true;

export const load = (async (event) => {
	const { locale } = event.data;
	await loadLocaleAsync(locale);

	return event.data;
}) satisfies LayoutLoad;
