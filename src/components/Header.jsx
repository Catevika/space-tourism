import { useMediaQuery } from "react-responsive";
import Logo from "./Logo";
import MainNavigation from "./MainNavigation";
import SideNavigation from "./SideNavigation";

const Header = () => {
	const isMobile = useMediaQuery({ maxWidth: "32.5em" });

	return (
		<>
			<a className='skip-to-content' href='#main'>
				Skip to content
			</a>
			<header className='primary-header flex'>
				<Logo />
				{isMobile ? <SideNavigation /> : <MainNavigation />}
			</header>
		</>
	);
};

export default Header;
