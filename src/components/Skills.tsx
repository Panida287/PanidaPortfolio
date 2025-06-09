import { useEffect, useRef, useState } from 'react';
import profile from '../data/profile.json';

export default function Skills() {
	const containerRef = useRef<HTMLDivElement>(null);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		if (!containerRef.current) return;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !loaded) {
					setLoaded(true);
					observer.disconnect();
				}
			},
			{threshold: 0.3}
		);
		observer.observe(containerRef.current);
		return () => observer.disconnect();
	}, [loaded]);

	return (
		<section className="skills w-full mx-auto flex flex-col justify-start items-center">
			{/* Header */}
			<div
				className="header-element mb-6 w-[90%] mx-auto flex flex-col gap-2 border-neon/20 border rounded-xl p-4 md:text-2xl">
				<h2 className="font-heading">
					<span className="text-white">My</span>
					<span className="text-pink pl-2">Skills</span>
				</h2>
				<p className="font-paragraph text-xs font-thin md:text-sm">
					Relevant skills that I have been practicing so far
				</p>
			</div>

			{/* Skills list */}
			<div
				ref={containerRef}
				className="skills-container w-[80%] flex flex-col gap-8 md:w-[70%]"
			>
				{profile.skills.map((skill, idx) => (
					<div key={idx} className="flex flex-col gap-2">
						<div className="flex items-center justify-between gap-4">
							<div className="flex items-center gap-2">
								<img
									src={skill.logo}
									alt={skill.alt}
									className="h-8 w-8 object-contain"
								/>
								<span className="text-white font-paragraph">{skill.skill}</span>
							</div>
							<span className="text-white font-heading">
                                {loaded ? skill.percentage : 0}%
                             </span>
						</div>

						<div className="w-full bg-gray-700 rounded-full h-2 overflow-visible">
							<div
								className="h-2 bg-neon shadow-neon rounded-l-full transition-all duration-1000 ease-out"
								style={{width: loaded ? `${skill.percentage}%` : '0%'}}
							/>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}