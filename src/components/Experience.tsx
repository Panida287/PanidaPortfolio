import { useState } from "react";
import profile from "../data/profile.json";

export default function Experience() {
	const [open, setOpen] = useState(false);
	const toggle = () => setOpen(o => !o);

	return (
		<div>
			<div className="sticky top-24 z-10 font-heading mt-4 w-[90%] mx-auto
                      flex justify-between items-center border-neon/20 border rounded-xl p-4
                      backdrop-blur-lg lg:justify-center lg:text-2xl">
				<div className="header flex justify-start items-center gap-1">
					<span>My</span>
					<span className="text-pink">Experience</span>
				</div>
				<button
					id="experience-btn"
					className="text-xl lg:hidden"
					onClick={toggle}
					aria-expanded={open}
				>
					<i
						className={`fa-light fa-square-caret-${open ? "up" : "down"} text-2xl ml-1`}
					/>
				</button>
			</div>
			<div className="experience-container">
				<div
					className={`
            experiences max-w-96 mx-auto 
            transition-all duration-300 ease-in-out
            ${open ? "h-auto translate-y-0 opacity-100" : "h-0 -translate-y-full opacity-0"}
            lg:opacity-100 lg:-translate-y-0 lg:h-full
          `}
				>
					{profile.experiences.map((exp, i) => (
						<div
							key={i}
							className="experience flex justify-center items-start h-full mt-8 mx-8"
						>
							<div className="timeline flex flex-col justify-start items-center h-full">
								<div className="circle h-5 w-5 rounded-full bg-neon" />
							</div>
							<div className="experience-card relative flex flex-col gap-4 border border-neon ml-4 p-4 w-full h-full">
								<h3 className="experience-year font-heading text-pink">
									{exp.year}
								</h3>
								<div
									className="experience-details text-sm font-regular leading-relaxed"
									dangerouslySetInnerHTML={{ __html: exp.details }}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
