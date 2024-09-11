import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = ({ url, request }) => {
	const { username, password } = request.json();

	return json({ username, password, url });
};
