import { useState, useEffect } from 'react';
import axios from 'axios';
import './Planets.css';

import Grid from '../Grid';

function Planets() {
	const headers = [
		'name',
		'rotation_period',
		'orbital_period',
		'diameter',
		'climate',
		'gravity',
		'terrain',
		'surface_water',
		'population',
		'films',
		'residents',
	];

	const actions = [
		{
			label: 'Go to Films',
			key: 'films',
		},
		{
			label: 'Go to Residents',
			key: 'residents',
		},
	];

	// States
	const [values, setValues] = useState([]);

	// Fetch planets from the api
	const fetchPlanets = async () => {
		const planets = await axios.get('https://swapi.dev/api/planets/');
		setValues(planets.data.results);
	};

	// Call at load
	useEffect(() => {
		fetchPlanets();
	}, []);

	return (
		<div className="App">
			<h1>Star Wars Planets</h1>
			<Grid headers={headers} values={values} actions={actions} />
		</div>
	);
}

export default Planets;
