import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setDefaults } from '../../store/actions/planetAction';
import './Planet.css';

function Planet() {
	const dispatch = useDispatch();
	useEffect(() => {
		return () => dispatch(setDefaults());
	});

	const planet = useSelector((state) => state.planets.planet);
	return (
		<>
			<h1>Planet Details</h1>
			<p>{planet.name}</p>
			<p>{planet.created}</p>
			<p>{planet.diameter}</p>
			<p>{planet.edited}</p>
			<p>{planet.gravity}</p>
			<p>{planet.obital_period}</p>
			<p>{planet.population}</p>
			<p>{planet.rotation_period}</p>
			<p>{planet.surface_water}</p>
			<p>{planet.terrain}</p>
		</>
	);
}

export default Planet;
