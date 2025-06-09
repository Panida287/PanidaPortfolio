import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
	const [mobileNavOpen, setMobileNavOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement | null>(null);
	const buttonRef = useRef<HTMLButtonElement | null>(null);

	const toggleMobileNav = () => setMobileNavOpen(open => !open);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent): void {
			const target = event.target as Node;
			if (
				mobileNavOpen &&
				dropdownRef.current &&
				!dropdownRef.current.contains(target) &&
				buttonRef.current &&
				!buttonRef.current.contains(target)
			) {
				setMobileNavOpen(false);
			}
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [mobileNavOpen]);

	const links = [
		{ to: '/', label: 'Home', icon: 'fa-light fa-house-blank' },
		{ to: '/projects', label: 'Projects', icon: 'fa-light fa-folder-tree' },
		{ to: '/about', label: 'About me', icon: 'fa-light fa-user' },
		{ to: '/contact', label: 'Contact', icon: 'fa-light fa-comment' },
	];

	return (
		<header className="z-10 backdrop-blur-lg w-[calc(100%-2rem)] mx-auto rounded-b-lg h-20 flex items-center justify-between relative">
			<img
				src="/assets/images/panida-8bit.png"
				height={100}
				width={100}
				alt="Panida 8 bit character"
				className="w-16 h-16 p-1"
			/>

			{/* Hamburger (mobile) */}
			<button
				ref={buttonRef}
				onClick={toggleMobileNav}
				className="hamburger-btn absolute right-4 text-white text-2xl rounded-md px-2 py-1 sm:hidden hover:shadow-neon"
			>
				<i className="fa-light fa-bars" />
			</button>

			{/* Desktop nav */}
			<nav className="hidden w-full sm:flex">
				<ul className="flex w-full justify-end gap-8 items-center text-white font-heading">
					{links.map(link => (
						<li key={link.to} className="text-center">
							<NavLink
								to={link.to}
								end
								className={({ isActive }) => `link${isActive ? ' active' : ''}`}
							>
								{link.label}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>

			{/* Mobile dropdown */}
			{mobileNavOpen && (
				<nav
					ref={dropdownRef}
					className="absolute right-0 -top-4 w-full z-50 animate-slideDownFast sm:hidden"
				>
					<ul className="absolute backdrop-blur-2xl bg-white/10 flex-col right-4 font-heading flex gap-1 text-xs top-20 px-2 py-2 rounded-lg transition-all duration-300 ease-in-out">
						{links.map(link => (
							<li key={link.to}>
								<NavLink
									to={link.to}
									end
									className={({ isActive }) =>
										`mobile-link w-full${isActive ? ' active' : ''}`
									}
								>
									<i className={`fa-sharp fa-regular ${link.icon} pr-3`} />
									{link.label}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>
			)}
		</header>
	);
}
