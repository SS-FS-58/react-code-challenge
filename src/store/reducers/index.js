import { combineReducers } from 'redux';

import planetReducer from './planetReducer';

export default combineReducers({
	planets: planetReducer,
});
