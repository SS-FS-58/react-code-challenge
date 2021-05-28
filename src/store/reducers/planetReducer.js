import { SET_FILMS_RESIDENTS, SET_PLANET, SET_TO_DEFAULT } from '../types';

const initialState = {
	filmsResidents: [],
	planet: {},
};

export default function planetReducer(state = initialState, action) {
	switch (action.type) {
		case SET_FILMS_RESIDENTS:
			return {
				...state,
				filmsResidents: action.payload,
			};
		case SET_PLANET:
			return {
				...state,
				planet: action.payload,
			};
		case SET_TO_DEFAULT:
			return initialState;
		default:
			return state;
	}
}
