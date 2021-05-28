import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Planets from '../Planets';
import FilmsResidents from '../FilmsResidents';
import Planet from '../Planet';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" exact component={Planets} />
					<Route path="/films-residents" exact component={FilmsResidents} />
					<Route path="/planet" exact component={Planet} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
