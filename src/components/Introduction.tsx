import { Link } from 'react-router-dom';
import profile from '../../public/data/profile.json';

export default function Introduction() {
	const { media, intro } = profile;

	return (
		<section className="introduction">
			<h2 className="sr-only">Introduction</h2>
			<div
				className="flex flex-col items-center bg-card/20 my-3 h-fit lg:flex-row-reverse">
				<img
					src={media.imageUrl}
					alt={media.alt}
					aria-label="picture of panida"
					className="profile-image w-[70%] object-cover -mt-8 xs:-mt-10 lg:w-[40%]"
				/>
				<div className="introduction-content relative -mt-10 w-full h-full flex justify-center items-center">
					<img
						src="/assets/images/laser-box.png"
						alt="laser box container"
						className="aria-hidden"
					/>
					<div
						className="introduction-text w-[75%] max-w-[330px] mx-auto pl-5 absolute flex flex-col justify-between items-center gap-4 lg:mt-5 xl:scale-125">
						<h2>
              <span className="text-shadow-neon font-display text-xl text-white xs:text-3xl">
                Designer &
              </span>
							<span className="text-shadow-neon font-gothic text-2xl text-white pl-2 xs:text-3xl">
                Coder
              </span>
						</h2>
						<h3 className="font-heading text-sm text-white xs:text-md">
							Communicate ideas with code and design.
						</h3>

						{/* INSERTED: intro from JSON */}
						<p className="intro text-white text-xs font-thin indent-10 xs:text-sm">
							{intro}
						</p>

						<div className="button-container w-full flex justify-between items-center xs:mt-2">
							<Link
								to="/projects"
								className="neon-button text-xs xs:text-sm md:text-md"
							>
								View my projects
							</Link>
							<a
								href="/assets/files/CV-Panida-Paethanom.pdf"
								download
								target="_blank"
								className="button text-xs xs:text-sm md:text-md"
							>
								Get my CV <i className="fa-regular fa-download" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}