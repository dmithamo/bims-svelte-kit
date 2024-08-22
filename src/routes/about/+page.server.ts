import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const RAND = Math.random() * 10;

	if (RAND > 3) {
		throw error(400, 'Hello. This is an example error message');
	}

	return { rand: RAND };
};
