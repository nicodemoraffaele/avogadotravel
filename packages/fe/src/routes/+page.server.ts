import type { PageServerLoad } from './$types';

// Orario del server al momento della richiesta: il countdown lo usa come
// riferimento invece dell'orologio del dispositivo (che può essere sbagliato).
export const load = (() => {
	return { serverNow: Date.now() };
}) satisfies PageServerLoad;
