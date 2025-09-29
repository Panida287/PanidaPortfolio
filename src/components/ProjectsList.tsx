import React from 'react';

export interface Project {
	id: number;
	title: string;
	about: string;
	year: string;
	description: string;
	imageUrl: string;
	tools: { name: string; logo: string }[];
	links: {
		repository: string;
		deployed: string;
	};
}

interface ProjectsListProps {
	projects: Project[];
}

const ProjectsList: React.FC<ProjectsListProps> = ({projects}) => {
	return (
			<section className="flex flex-col">
				<ul className="w-full">
					{projects.map((proj) => (
						<li
							key={proj.id}
							className="project-container flex flex-col mt-10 mb-10 xl:flex-row xl:items-start"
						>
							<div className="project-image w-full flex flex-col justify-center items-center">
								<img
									className="rounded-md"
									src={proj.imageUrl}
									height={300}
									width={400}
									alt={proj.title}
								/>
							</div>
							<div className="project-info w-full max-w-3xl mx-auto flex flex-col gap-5">
								<h3 className="project-title font-heading text-center text-xl mt-4 xl:mt-0">
									{proj.title}
								</h3>
								<p className="project-year font-heading text-gray-300 text-center">
									{proj.year}
								</p>
								<p className="project-about italic text-sm text-gray-300">
									{proj.about}
								</p>
								<div
									className="project-description indent-10 text-sm leading-relaxed space-y-4"
									dangerouslySetInnerHTML={{__html: proj.description}}
								/>
								<div
									className="project-tools flex flex-col gap-2 w-30rem border border-neon/20 mx-auto rounded-lg p-4">
									<p className="text-sm font-bold text-center">Tools used in this project:</p>
									<div
										className="tools flex flex-wrap justify-evenly items-center gap-4 w-full rounded-md p-4">
										{proj.tools.map((tool) => (
											<div key={tool.name} className="flex flex-col items-center gap-1">
												<img
													src={tool.logo}
													alt={tool.name}
													title={tool.name}
													className="h-8 w-8"
												/>
												<span className="text-xs text-white">{tool.name}</span>
											</div>
										))}
									</div>
								</div>

								<div className="btn-container flex items-center gap-10 mb-3">
									<a
										href={proj.links.repository}
										target="_blank"
										rel="noreferrer"
										className="button github-btn text-sm"
									>
										Github Repository
									</a>
									<a
										href={proj.links.deployed}
										target="_blank"
										rel="noreferrer"
										className="neon-button deployed-btn text-sm"
									>
										Deployed Site
									</a>
								</div>
								<span className="h-[1px] w-[80%] mx-auto rounded-full bg-neon/30 mt-10"></span>
							</div>
						</li>
					))}
				</ul>
			</section>
	);
};

export default ProjectsList;
