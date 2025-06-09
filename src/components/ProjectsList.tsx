import React from 'react';

export interface Project {
	id: number;
	title: string;
	about: string;
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
							<div className="project-info w-full flex flex-col gap-5">
								<h3 className="project-title font-header text-center text-xl mt-4 xl:mt-0">
									{proj.title}
								</h3>
								{/* render the short about tagline */}
								<p className="project-about font-paragraph italic text-sm text-gray-300">
									{proj.about}
								</p>
								{/* render description which contains HTML */}
								<div
									className="project-description font-paragraph indent-10 text-sm leading-relaxed space-y-4"
									dangerouslySetInnerHTML={{__html: proj.description}}
								/>
								<div className="project-tools flex flex-col gap-2">
									<p className="text-sm font-bold">Tools used in this project:</p>
									<div className="tools flex justify-evenly items-center gap-4 w-full rounded-md p-4">
										{proj.tools.map((tool) => (
											<img
												key={tool.name}
												src={tool.logo}
												alt={tool.name}
												title={tool.name}
												className="h-6 w-6"
											/>
										))}
									</div>
								</div>
								<div className="btn-container flex items-center justify-evenly mb-3">
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
