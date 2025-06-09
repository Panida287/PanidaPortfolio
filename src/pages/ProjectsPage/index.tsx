import { Link } from 'react-router-dom';
import ProjectsList, { Project } from '../../components/ProjectsList';
import rawProjects from '../../../public/data/projects.json';

export default function ProjectsPage() {
	interface RawProject {
		id: number;
		title: string;
		about: string;
		description: string;
		tools: { name: string; logo: string }[];
		media: { image: string; alt: string }[];
		links: { repository: string; deployed: string };
	}

	// Treat raw JSON as an array of RawProject
	const data: RawProject[] = rawProjects;

	// Map RawProject to the Project interface (including 'about')
	const projects: Project[] = data.map((p) => ({
		id:          p.id,
		title:       p.title,
		about:       p.about,
		description: p.description,
		imageUrl:    p.media[0].image,
		tools:       p.tools,
		links:       p.links,
	}));

	return (
		<>
      <span className="back-btn-container w-full flex items-center justify-start p-4">
        <Link
	        to="/"
	        className="button absolute top-8 text-white text-sm p-2"
        >
          <i className="fa-solid fa-caret-left pr-2" />
          Back
        </Link>
      </span>
			<h1 className="w-full mb-5 flex justify-center items-center font-mono text-primary text-2xl font-bold">
				<span className="pr-2 text-pink">My</span>
				<span className="text-white">Projects</span>
			</h1>

			<ProjectsList projects={projects} />
		</>
	);
}
