export default function BackToTopButton() {
	const handleClick = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<button
			onClick={handleClick}
			className="button relative left-1/2 -translate-x-1/2 mt-10"
		>
			Back to top
		</button>
	);
}
