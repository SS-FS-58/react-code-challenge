import { SET_FILMS_RESIDENTS, SET_PLANET, SET_TO_DEFAULT } from '../types';

export const setFilmsResidents = (filmsResidents) => (dispatch) => {
	dispatch({
		type: SET_FILMS_RESIDENTS,
		payload: filmsResidents,
	});
};

export const setPlanet = (planet) => (dispatch) => {
	dispatch({
		type: SET_PLANET,
		payload: planet,
	});
};

export const setDefaults = () => (dispatch) => {
	dispatch({
		type: SET_TO_DEFAULT,
	});
};
