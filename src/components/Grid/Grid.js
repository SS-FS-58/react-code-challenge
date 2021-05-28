import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { setFilmsResidents, setPlanet } from '../../store/actions/planetAction';
import CreatePlanet from '../CreatePlanet';
import './Grid.css';

function Grid({ headers, values, actions }) {
	const dispatch = useDispatch();

	// States
	const [open, setOpen] = useState(false);

	const numClass = (value) => {
		if (Array.isArray(value) || !isNaN(value)) {
			return 'numValues';
		} else {
			return '';
		}
	};

	return (
		<>
			<table className="gridTable">
				<thead>
					<tr>
						{headers.map((colName) => (
							<th key={colName}>{colName}</th>
						))}
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{values.map((row, index) => (
						<tr key={index}>
							{headers.map((colName) => (
								<td key={colName} className={numClass(row[colName])}>
									{Array.isArray(row[colName])
										? row[colName].length
										: row[colName]}
								</td>
							))}
							{!!actions.length && (
								<td className="gridActions">
									{actions.map(({ label, key }) =>
										row[key].length ? (
											<button
												key={label + 'available'}
												onClick={() => dispatch(setFilmsResidents(row[key]))}
											>
												<Link to="/films-residents">{label}</Link>
											</button>
										) : (
											<Fragment key={label + 'unavailable'}></Fragment>
										)
									)}

									<button onClick={() => dispatch(setPlanet(row))}>
										<Link to="/planet">Details</Link>
									</button>
									<button onClick={() => setOpen(true)}>Create</button>
								</td>
							)}
						</tr>
					))}
				</tbody>
			</table>
			{open ? <CreatePlanet close={() => setOpen(false)} /> : null}
		</>
	);
}

Grid.propTypes = {
	headers: PropTypes.array,
	actions: PropTypes.array,
	values: PropTypes.array,
};

export default Grid;
