import ShuffleCarousel, { CarouselItem } from "./ShuffleCarousel";
import rawProjects from '../../public/data/projects.json';

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
		</section>
	);
}
