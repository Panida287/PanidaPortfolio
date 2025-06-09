import profile from "../data/profile.json";

export default function Learning() {
	return (
		<section className="my-skills-and-learning mt-12">
			<div className="learning mx-auto flex flex-col justify-center items-center">
				<div className="header-element w-[90%] mx-auto flex flex-col gap-2 justify-start items-start border-neon/20 border rounded-xl p-4 md:text-2xl">
					<h2 className="font-heading">
						<span className="text-white">Currently</span>
						<span className="text-pink pl-2">Learning</span>
					</h2>
					<p className="font-paragraph text-xs font-thin md:text-sm">
						What I am learning at school and in personal time
					</p>
				</div>
				<div className="learning-container w-[70%] flex justify-between gap-4">
					{profile.learning.map((item, idx) => (
						<div
							key={idx}
							className="learning-card h-fit flex flex-col justify-center items-center bg-card/20 rounded-lg md:w-36"
						>
							<img
								src={item.logo}
								alt={item.alt}
								className="learning-logo mt-8 w-1/2 object-cover"
							/>
							<h4 className="learning-name font-bigHeader text-sm my-5 text-center md:text-xl">
								{item.skill}
							</h4>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
