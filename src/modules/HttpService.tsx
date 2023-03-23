import { createContext, useContext, useMemo } from 'react';
import { Children } from '@/@types/common';
import axios from 'axios';

interface IHttpService {
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
			console.error(err, 'err');
			return err;
		}
	}
}

const HttpServiceContext = createContext<IHttpService>(new HttpService());

interface IHttpServiceProvider {
	children: Children;
}
export function HttpServiceProvider({ children }: IHttpServiceProvider) {
	const value = useMemo(() => new HttpService(), [HttpService]);

	return (
		<HttpServiceContext.Provider value={value}>
			{children}
		</HttpServiceContext.Provider>
	);
}

export const useHttpService = () => useContext(HttpServiceContext);
