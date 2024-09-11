import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	// if valid session, redirect to homepage
	if (cookies.get('sessionid')) {
		return { session: {} };
	}
};

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const username = data.get('username');
		const password = data.get('password');

		if (password !== 'password') {
			return fail(400, { username, incorrectPassword: true });
		}
	}
} satisfies Actions;
