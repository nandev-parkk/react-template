import { ReactNode, createContext, useContext } from 'react';
import axios from 'axios';

class HttpService {
	constructor() {}

	// sayHello() {
	//   console.log("hello");
	// }
}

interface HttpServiceType {}

const HttpServiceContext = createContext(new HttpService());

interface HttpServiceProviderProps {
	children: ReactNode;
}

export function HttpServiceProvider({ children }: HttpServiceProviderProps) {
	return (
		<HttpServiceContext.Provider value={{ HttpService }}>
			{children}
		</HttpServiceContext.Provider>
	);
}

export const useHttpService = () => useContext(HttpServiceContext);
