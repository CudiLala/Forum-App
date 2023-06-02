import auth from './auth';
import { browser, dev } from '$app/environment';

const api = {
	url: () => (browser || dev ? 'http://127.0.0.1:8080' : 'https://api.forum.projects.cudilala.io'),
	auth
};

export default api;