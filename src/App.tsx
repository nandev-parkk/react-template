import '@/styles/global.scss';
import { Layout } from '@/components/index';
import router from './utils/Router';
import { RouterProvider } from 'react-router-dom';

export default function App() {
	return (
		<Layout>
			<RouterProvider router={router} />
		</Layout>
	);
}
