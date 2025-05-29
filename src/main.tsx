import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './css/style.css';
import App from './App.tsx';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import Layout from './Layout';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '',
				element: <App />
			},
			{
				path: 'projects',
				element: <ProjectsPage />
			},
			{
				path: 'projects/:id',
				element: <ProjectDetailPage />
			},
			{
				path: 'about',
				element: <ProjectDetailPage />
			},
			{
				path: 'contact',
				element: <ProjectDetailPage />
			}
		]
	},
	{
		path: '*',
		element: <NotFoundPage />,
	}
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);


