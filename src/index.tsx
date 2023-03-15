import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HttpServiceProvider } from '@/modules/HttpService';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);

root.render(
	<StrictMode>
		<HttpServiceProvider>
			<App />
		</HttpServiceProvider>
	</StrictMode>,
);
