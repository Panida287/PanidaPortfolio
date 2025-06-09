import profile from "../../public/data/profile.json";

export default function AboutMe() {
	const { media, intro } = profile;

	return (
		<section className="about-me-container">
			<div className="about-me my-10 w-[90%] mx-auto flex flex-col gap-2 justify-center items-center p-4 sm:flex-row">
				<img
					src={media.imageUrl}
					alt={media.alt}
					aria-label="picture of panida"
					className="profile-image w-[70%] object-cover -mt-8 xs:-mt-10 sm:w-[40%]"
				/>
				<p className="about font-paragraph text-white text-sm font-regular indent-10 leading-7 w-[90%]">
					{intro}
				</p>
			</div>
		</section>
	);
}
