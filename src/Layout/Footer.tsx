import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<footer className="mt-10 mb-4 w-[calc(100%-2rem)] max-w-5xl mx-auto flex flex-col justify-center items-center border border-neon/20 rounded-xl p-4">
			<h2 className="font-header w-full text-xl flex justify-center items-center text-white">
				Have an idea in mind?
			</h2>
			<h3 className="text-white font-paragraph text-md font-regular my-5">
				Let's collaborate!
			</h3>

			<Link to="/contact" className="neon-button text-sm">
				Contact me
			</Link>

			<div className="contact-details text-white font-paragraph text-xs font-thin mt-10 flex flex-col gap-2 justify-center items-center">
				<span className="email"></span>
			</div>

			<div className="social-media text-white font-paragraph text-3xl flex gap-5 my-5 justify-center items-center">
				<a href="https://www.linkedin.com/in/panida-paethanom-8a6317239/" target="_blank" rel="noopener noreferrer" className="social-media-icon linkedIn">
					<i className="fab fa-linkedin transition-transform ease-in-out duration-300 hover:scale-125" />
				</a>
				<a href="https://github.com/Panida287" target="_blank" rel="noopener noreferrer" className="social-media-icon github">
					<i className="fab fa-github transition-transform ease-in-out duration-300 hover:scale-125" />
				</a>
				<a href="https://www.instagram.com/chef_shots?igsh=MTkyNjJhYWUxcHhybg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-media-icon instagram">
					<i className="fab fa-instagram transition-transform ease-in-out duration-300 hover:scale-125" />
				</a>
			</div>

			<div className="copyright text-white font-paragraph text-xs font-thin flex flex-col gap-2 justify-center items-center">
				Copyright © 2025 Frontend Developer & UX/UI Designer
			</div>
		</footer>
	);
}
