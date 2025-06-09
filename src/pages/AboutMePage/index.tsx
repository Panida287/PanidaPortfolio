import AboutMe from "../../components/AboutMe";
import Education from "../../components/Education";
import Experience from "../../components/Experience";
import BackToTopButton from '../../components/BackToTopButton.tsx';
import Learning from "../../components/Learning.tsx";
import Skills from '../../components/Skills.tsx';

export default function AboutMePage() {
	return (
		<>
			<section className="mt-24">
				<h1 className="w-full mb-5 flex justify-center items-center font-mono text-pink text-2xl font-bold">
					<span className="pr-2">About</span>
					<span className="text-white">Me</span>
				</h1>
				<AboutMe />
				<Skills />
				<Learning />
				<section className="education-experience relative h-auto flex flex-col lg:flex-row lg:w-full lg:justify-evenly">
					<Education />
					<Experience />
				</section>

				<BackToTopButton />
			</section>
		</>
	);
}
