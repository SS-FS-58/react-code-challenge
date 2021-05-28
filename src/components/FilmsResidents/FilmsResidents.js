import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setDefaults } from '../../store/actions/planetAction';
import './FilmsResidents.css';

function Films() {
	const dispatch = useDispatch();
	useEffect(() => {
		return () => dispatch(setDefaults());
	});
	const filmsResidents = useSelector((state) => state.planets.filmsResidents);
	return (
		<ul>
			{filmsResidents.map((item, index) => (
				<li key={index}>{item}</li>
			))}
		</ul>
	);
}

export default Films;
