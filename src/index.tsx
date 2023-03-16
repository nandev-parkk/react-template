import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HttpServiceProvider } from '@/modules/HttpService';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);

root.render(
	<StrictMode>
		<HttpServiceProvider>
			<RecoilRoot>
				<App />
			</RecoilRoot>
		</HttpServiceProvider>
	</StrictMode>,
);
