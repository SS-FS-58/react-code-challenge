import PropTypes from 'prop-types';
import './CreatePlanet.css';
import Modal from '../Modal';

function CreatePlanet({ close }) {
	const submit = (e) => {
		e.preventDefault();
		alert('Successfully Submitted');
		close();
	};
	return (
		<Modal>
			<form onSubmit={submit}>
				<h1>Create Planet</h1>
				<input type="text" name="name" placeholder="Name" required />
				<input
					type="number"
					name="rotation_period"
					placeholder="Rotation Period"
					required
				/>
				<input
					type="number"
					name="orbital_period"
					placeholder="Orbital Period"
					required
				/>
				<input type="number" name="diameter" placeholder="Diameter" required />
				<input type="text" name="climate" placeholder="Climate" required />
				<input type="text" name="gravity" placeholder="Gravity" required />
				<select name="terrain">
					<option value="terrain_1">Terrain 1</option>
					<option value="terrain_2">Terrain 2</option>
				</select>
				<input
					type="text"
					name="surface_water"
					placeholder="Surface Water"
					required
				/>
				<input type="submit" value="Create" />
				<button onClick={close}>Close</button>
			</form>
		</Modal>
	);
}

CreatePlanet.propTypes = {
	close: PropTypes.func,
};

export default CreatePlanet;
