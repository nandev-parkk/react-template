import '@/styles/global.scss';
import { Button, Layout } from '@/components/index';
import { Home, Sub, NotFound } from '@/pages/index';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <NotFound />,
	},
	{ path: '/sub', element: <Sub /> },
]);

export default function App() {
	return (
		<Layout>
			<RouterProvider router={router} />
		</Layout>
	);
}
