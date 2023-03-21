import '@/styles/global.scss';
import { Layout } from '@/components/index';
import { RouterProvider } from 'react-router-dom';
import router from './utils/Router';

export default function App() {
	return (
		<Layout>
			<RouterProvider router={router} />
		</Layout>
	);
}
