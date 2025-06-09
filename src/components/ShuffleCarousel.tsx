import { useState, useEffect } from 'react';

export interface CarouselItem {
	id: number;
	title: string;
	about: string;
	year: string;
	imageUrl: string;
	link: string;
}

interface ShuffleCarouselProps {
	items: CarouselItem[];
}

export default function ShuffleCarousel({items}: ShuffleCarouselProps) {
	const [order, setOrder] = useState<CarouselItem[]>([]);

	useEffect(() => {
		setOrder(items);
	}, [items]);

	const slidePrev = () => {
		setOrder((o) => {
			const copy = [...o];
			const last = copy.pop();
			if (last) copy.unshift(last);
			return copy;
		});
	};

	const slideNext = () => {
		setOrder((o) => {
			const copy = [...o];
			const first = copy.shift();
			if (first) copy.push(first);
			return copy;
		});
	};

	const visible = order.slice(0, 3);

	return (
		<>
			<div
				className="carousel-wrapper mb-4 w-full h-[470px] py-10 flex justify-center items-center overflow-x-hidden">
				<ul className="carousel relative h-full w-full max-w-[800px] items-center">
					{visible.map((p, i) => (
						<li
							key={p.id}
							className={`carousel-item carousel-item-${i + 1} flex flex-col justify-center items-center border border-neon/50 backdrop-blur-md p-4 rounded-xl`}
						>
							<img
								src={p.imageUrl}
								alt={p.title}
								className="w-80 h-60 object-cover rounded-lg mb-4 border border-white/50"
							/>
							<div className="flex items-center gap-2 mb-2">
								<h3 className="font-heading text-white text-xl">
									{p.title}
								</h3>
								<p className="text-pink font-heading">{p.year}</p>
							</div>
							<p className="text-white font-thin text-sm italic">{p.about}</p>
							<div>
								<a
									href={p.link}
									className="button text-sm mt-4"
									target="_blank"
									rel="noreferrer"
								>
									View project
								</a>
							</div>
						</li>
					))}
				</ul>
			</div>

			<div className="carousel-controls w-full flex justify-center items-center gap-20 text-4xl text-white">
				<button onClick={slidePrev} className="previous" aria-label="Previous">
					<i className="fa-solid fa-circle-chevron-left hover:scale-110 transition" />
				</button>
				<button onClick={slideNext} className="next" aria-label="Next">
					<i className="fa-solid fa-circle-chevron-right hover:scale-110 transition" />
				</button>
			</div>
		</>
	);
}
