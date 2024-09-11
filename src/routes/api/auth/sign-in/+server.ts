import type { RequestHandler } from './$types';

export const POST: RequestHandler = ({ url }) => {
	return new Response(String(url));
};
