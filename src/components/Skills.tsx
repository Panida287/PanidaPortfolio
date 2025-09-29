import { useEffect, useRef, useState } from 'react';
import profile from '../data/profile.json';

const efficiencyLabels: Record<number, string> = {
	1: 'Learning',
	2: 'Beginner',
	3: 'Intermediate',
	4: 'Proficient',
	5: 'Expert',
};

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
			{ threshold: 0.3 }
		);
		observer.observe(containerRef.current);
		return () => observer.disconnect();
	}, [loaded]);

	return (
		<section className="skills w-full mx-auto flex flex-col justify-start items-center">
			{/* Header */}
			<div className="header-element mb-6 w-[90%] mx-auto flex flex-col gap-2 border-neon/20 border rounded-xl p-4 md:text-2xl">
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
				className="skills-container md:w-[70%] grid grid-cols gap-6 sm:grid-cols-2"
			>
				{profile.skills.map((skill, idx) => {
					const rating = Math.round(skill.rating);

					return (
						<div key={idx} className="flex flex-col gap-2 bg-white/10 rounded-lg p-4">
							<div className="flex items-center justify-between gap-4">
								<div className="flex items-start gap-2">
									<img
										src={skill.logo}
										alt={skill.alt}
										className="h-8 w-8 object-contain"
									/>
									<span className="text-white font-paragraph -translate-y-1">{skill.skill}</span>
								</div>
								<div className="flex flex-col items-end">
						<span className="text-white font-heading">
							{loaded ? `${rating}/5` : '0/5'}
						</span>
									<span className="text-xs text-gray-400 font-paragraph">
							{loaded ? efficiencyLabels[rating] : ''}
						</span>
								</div>
							</div>

							{/* 5 compact bars */}
							<div className="flex gap-1">
								{[...Array(5)].map((_, i) => (
									<div
										key={i}
										className={`h-2 w-6 rounded-sm transition-all duration-700 ease-out transform ${
											loaded && i < rating
												? 'bg-neon shadow-neon'
												: 'bg-gray-700'
										}`}
										style={{ transform: 'skewX(-30deg)' }}
									/>
								))}
							</div>

						</div>
					);
				})}
			</div>

		</section>
	);
}
