import ContactForm from '../../components/ContactForm.tsx';

export default function ContactPage() {
	return (
		<>
			<h1 className="w-full mt-24 mb-5 flex justify-center items-center font-mono text-primary text-2xl font-bold">
				<span className="pr-2 text-pink">Contact</span>
				<span>Me</span>
			</h1>
			<section
				className="contact-information relative w-[80%] max-w-[900px] mx-auto flex justify-end items-start text-xs">
				<div className="contact-me-text absolute left-0 mt-5">
					<h3 className="text-lg font-heading text-neon">Would love to hear from you</h3>
					<p className="text-md">Drop me a message!</p>
				</div>
				<div className="text-whitetext-xl flex flex-col gap-1 my-5 justify-center items-end">
					<a href="https://www.linkedin.com/in/panida-paethanom-8a6317239/" target="_blank" className="social-media-icon linkedIn">
						<i className="fab fa-linkedin pr-[1px] text-2xl transition-transform ease-in-out duration-300 hover:scale-125"></i>
					</a>
					<a href="https://github.com/Panida287" target="_blank" className="social-media-icon github">
						<i className="fab fa-github pr-[1px] text-2xl transition-transform ease-in-out duration-300 hover:scale-125"></i>
					</a>
					<a href="https://www.instagram.com/chef_shots?igsh=MTkyNjJhYWUxcHhybg%3D%3D&utm_source=qr" target="_blank" className="social-media-icon instagram">
						<i className="fab fa-instagram pr-[1px] text-2xl transition-transform ease-in-out duration-300 hover:scale-125"></i>
					</a>
					<div>
						<span className="text-primary -mr-[3px] text-sm">panida.paethanom</span>
						<span className="text-sm">@gmail.com</span>
					</div>
				</div>
			</section>
			<ContactForm />
		</>
	);
}