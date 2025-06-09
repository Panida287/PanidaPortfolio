import ShuffleCarousel, { CarouselItem } from './ShuffleCarousel';
import rawProjects from '../data/projects.json';
import { Link } from 'react-router-dom';

export default function FeaturedProjects() {
	const items: CarouselItem[] = rawProjects.map((p) => ({
		id: p.id,
		title: p.title,
		about: p.about,
		year: p.year,
		imageUrl: p.media[0].image,
		link: p.links.deployed,
	}));

	return (
		<section>
			<div className="my-10 flex flex-col gap-2 justify-center items-start border-neon/20 border rounded-xl p-4">
				<h2 className="font-heading text-2xl flex gap-2">
					<span className="text-white">Featured</span>
					<span className="text-pink">Projects</span>
				</h2>
				<p className="font-paragraph text-xs font-thin">
					Some of my favorite projects.
				</p>

			</div>

			<ShuffleCarousel items={items} />
			<span className="button-container flex justify-end items-center my-5">
            <Link to="/projects"
                  className="button mt-2">
            View more projects
	            <i className="fa-duotone fa-regular fa-angle-right pl-4"></i>
            </Link>
        </span>
		</section>
	);
}
