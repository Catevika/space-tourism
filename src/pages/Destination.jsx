import Moon from "../assets/destination/image-moon.png";

const Destination = () => {
	return (
		<main className='container flex flex-container flex-column'>
			<h1 className='numbered-title'>
				<span arai-label='hidden'>01</span> Pick your destination
			</h1>
			<div className='flex flex-container flex-center'>
				<img src={Moon} alt='Moon planet' className='img-moon' />
				<article className='destination-info'>
					<div className='underline-indicators flex'>
						{/* eslint-disable-next-line */}
						<button
							aria-selected='true'
							className='uppercase bg-transparent ff-sans-cond text-white letter-spacing-2'
						>
							Moon
						</button>
						{/* eslint-disable-next-line */}
						<button
							aria-selected='false'
							className='uppercase bg-transparent ff-sans-cond text-accent letter-spacing-2'
						>
							Mars
						</button>
						{/* eslint-disable-next-line */}
						<button
							aria-selected='false'
							className='uppercase bg-transparent ff-sans-cond text-accent letter-spacing-2'
						>
							Europa
						</button>
						{/* eslint-disable-next-line */}
						<button
							aria-selected='false'
							className='uppercase bg-transparent ff-sans-cond text-accent letter-spacing-1'
						>
							Titan
						</button>
					</div>
					<h2 className='uppercase ff-serif text-light'>Moon</h2>
					<p className='text-accent p-text'>
						See our planet as you’ve never seen it before. A perfect relaxing
						trip away to help regain perspective and come back refreshed. While
						you’re there, take in some history by visiting the Luna 2 and Apollo
						11 landing sites.
					</p>
					<div className='destination-meta flex flex-destination'>
						<div>
							<h3 className='uppercase text-accent'>
								Avg. distance{" "}
								<p className='uppercase ff-serif text-white'>384,400 km</p>
							</h3>
						</div>
						<div>
							<h3 className='uppercase text-accent'>
								Est. travel time{" "}
								<p className='uppercase ff-serif text-white'>3 days</p>
							</h3>
						</div>
					</div>
				</article>
			</div>
		</main>
	);
};

export default Destination;
