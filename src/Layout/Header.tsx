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
		{to: '/', label: 'Home', icon: 'fa-light fa-house-blank'},
		{to: '/projects', label: 'Projects', icon: 'fa-light fa-folder-tree'},
		{to: '/about', label: 'About me', icon: 'fa-light fa-user'},
		{to: '/contact', label: 'Contact', icon: 'fa-light fa-comment'},
	];

	return (
		<header
			className="fixed w-full z-50 backdrop-blur-lg flex items-center rounded-b-lg h-20">
			<div className="flex w-[calc(100%-2rem)] items-center justify-between max-w-5xl mx-auto">
				<img
					src="/assets/images/panida-8bit.png"
					height={100}
					width={100}
					alt="Panida 8 bit character"
					className="w-16 h-16 p-1 -translate-x-4"
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
									className={({isActive}) => `link${isActive ? ' active' : ''}`}
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
						className="relative right-0 -top-4 w-full z-50 animate-slideDownFast sm:hidden"
					>
						<ul className="absolute z-50 flex-col bg-background right-0 flex gap-1 text-sm top-10 px-2 py-2 shadow-neon rounded-lg transition-all duration-300 ease-in-out">
							{links.map(link => (
								<li key={link.to}>
									<NavLink
										to={link.to}
										end
										className={({isActive}) =>
											`mobile-link w-full font-mono hover:bg-white hover:text-background${isActive ? ' active' : ''}`
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
			</div>
		</header>
	);
}
