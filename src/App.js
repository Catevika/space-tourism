import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import CrueCommander from "./pages/CrueCommander";
import Technology from "./pages/Technology";
import Header from "./components/Header";

function App() {
	return (
		<div className='bg bg-dark'>
			<Switch>
				<Route exact path='/'>
					<div className='bg home'>
						<Header />
						<Home />
					</div>
				</Route>
				<Route path='/destination'>
					<div className='bg destination'>
						<Header />
						<Destination />
					</div>
				</Route>
				<Route path='/crue'>
					<div className='bg crue'>
						<Header />
						<CrueCommander />
					</div>
				</Route>
				<Route path='/technology'>
					<div className='bg technology'>
						<Header />
						<Technology />
					</div>
				</Route>
			</Switch>
		</div>
	);
}

export default App;
