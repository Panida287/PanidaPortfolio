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

				<div className="learning-container w-[80%] grid grid-cols-2 gap-6 mt-6">
					{profile.learning.map((item, idx) => (
						<div
							key={idx}
							className="learning-card h-fit flex flex-col justify-center items-start bg-card/20 rounded-lg p-4"
						>
							<h4 className="learning-name font-regular text-sm mb-2 md:text-lg">
								{item.skill}
							</h4>
							<p className="text-sm text-gray-300">{item.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
