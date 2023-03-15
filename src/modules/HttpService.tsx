import { createContext, useContext } from 'react';
import { Children } from '@/@types/common';
import axios from 'axios';

interface HttpServiceType {
	getPosts: () => any;
}

class HttpService {
	constructor() {
		axios.defaults.baseURL = process.env.BASE_URL;
	}

	async getPosts() {
		try {
			const res = await axios.get('/posts');

			return res;
		} catch (err) {
			console.error(err);
		}
	}
}

const HttpServiceContext = createContext<HttpServiceType>(new HttpService());

export function HttpServiceProvider({ children }: Children) {
	return (
		<HttpServiceContext.Provider value={new HttpService()}>
			{children}
		</HttpServiceContext.Provider>
	);
}

export const useHttpService = () => useContext(HttpServiceContext);
