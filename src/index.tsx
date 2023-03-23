import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { HttpServiceProvider } from '@/modules/HttpService';
import { RecoilRoot } from 'recoil';
import App from './App';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);

root.render(
	<StrictMode>
		<RecoilRoot>
			<HttpServiceProvider>
				<App />
			</HttpServiceProvider>
		</RecoilRoot>
	</StrictMode>,
);
