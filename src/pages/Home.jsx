import { Link } from "react-router-dom";
const Home = () => {
	return (
		<main className='container flex flex-container flex-home'>
			<div>
				<h1 className='uppercase ff-sans-cond text-accent letter-spacing-1'>
					So, you want to travel to
					<span className='d-block uppercase ff-serif text-white flow space'>
						Space
					</span>
				</h1>
				<p className='text-accent p-text'>
					Let’s face it; if you want to go to space, you might as well genuinely
					go to outer space and not hover kind of on the edge of it. Well sit
					back, and relax because we’ll give you a truly out of this world
					experience!
				</p>
			</div>
			<div>
				<Link
					to='!#'
					className='large-button uppercase fs-300 ff-serif text-dark bg-white'
				>
					Explore
				</Link>
			</div>
		</main>
	);
};

export default Home;
