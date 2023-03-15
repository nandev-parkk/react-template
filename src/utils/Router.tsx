import { Button, Layout } from '@/components/index';
import { Home, NotFound } from '@/pages/index';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <NotFound />,
	},
]);

export default router;
