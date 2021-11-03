import { useState } from "react";
import { Link } from "react-router-dom";
import iconHamburger from "../assets/shared/icon-hamburger.svg";
import iconClose from "../assets/shared/icon-close.svg";

const SideNavigation = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [toggleImg, setToggleImg] = useState(iconHamburger);

	const handleClick = () => {
		setToggleMenu(!toggleMenu);
		toggleMenu ? setToggleImg(iconHamburger) : setToggleImg(iconClose);
	};

	return (
		<>
			<div>
				<button
					className='mobile-nav-toggle'
					aria-controls='primary-navigation'
					aria-expanded={toggleMenu ? "true" : "false"}
					onClick={handleClick}
					style={{
						backgroundImage: `url(${toggleImg})`,
						transform: `translateX(${toggleMenu} ? 100% : 0)`
					}}
				>
					<span className='sr-only'>Menu</span>
				</button>
			</div>
			<nav>
				<ul
					className='primary-navigation underline-indicators flex'
					data-visible={
						toggleMenu ? "true" : "false"
					} /* custom dynamic attribute jsx */
				>
					<li className='active'>
						<Link
							className='uppercase ff-sans-cond text-white letter-spacing-2'
							to='/'
						>
							<span aria-hidden='true'>00</span> Home
						</Link>
					</li>
					<li>
						<Link
							className='uppercase ff-sans-cond text-white letter-spacing-2'
							to='/destination'
						>
							<span aria-hidden='true'>01</span> Destination
						</Link>
					</li>
					<li>
						<Link
							className='uppercase ff-sans-cond text-white letter-spacing-2'
							to='/crue'
						>
							<span aria-hidden='true'>02</span> Crue
						</Link>
					</li>
					<li>
						<Link
							className='uppercase ff-sans-cond text-white letter-spacing-2'
							to='/technology'
						>
							<span aria-hidden='true'>03</span> Technology
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default SideNavigation;
