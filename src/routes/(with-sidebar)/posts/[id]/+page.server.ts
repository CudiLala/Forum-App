import type { PageServerLoad } from './$types';

export const load = (async ({ cookies, depends }) => {
	depends('app:user');

	return {
		access_token: cookies.get('access_token')
	};
}) satisfies PageServerLoad;
