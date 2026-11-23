import { redirect } from '@sveltejs/kit';

// Pagina temporaneamente nascosta: per ora il sito ha solo la home.
export const load = () => {
	redirect(307, '/');
};
