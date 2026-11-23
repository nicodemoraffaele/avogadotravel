import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';

// Pagina temporaneamente nascosta: per ora il sito ha solo la home.
export const load = () => {
	redirect(307, `${base}/`);
};
