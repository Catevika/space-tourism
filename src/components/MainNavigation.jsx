import { NavLink } from "react-router-dom";

const MainNavigation = () => {
	return (
		<nav>
			<ul className='primary-navigation underline-indicators flex'>
				<li className='active'>
					<NavLink
						className='uppercase ff-sans-cond text-white letter-spacing-2 flex'
						to='/'
					>
						<span aria-hidden='true'>00</span> Home
					</NavLink>
				</li>
				<li>
					<NavLink
						className='uppercase ff-sans-cond text-white letter-spacing-2 flex'
						to='/destination'
					>
						<span aria-hidden='true'>01</span> Destination
					</NavLink>
				</li>
				<li>
					<NavLink
						className='uppercase ff-sans-cond text-white letter-spacing-2 flex'
						to='/crue'
					>
						<span aria-hidden='true'>02</span> Crue
					</NavLink>
				</li>
				<li>
					<NavLink
						className='uppercase ff-sans-cond text-white letter-spacing-2 flex'
						to='/technology'
					>
						<span aria-hidden='true'>03</span> Technology
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default MainNavigation;
