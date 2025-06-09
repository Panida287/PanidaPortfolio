import {Outlet} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
	return (
		<>
			<Header />
			<main className="flex-1 w-[calc(100%-2rem)] max-w-5xl mx-auto mt-24">
				<Outlet />
			</main>
			<Footer />
		</>
	);
}