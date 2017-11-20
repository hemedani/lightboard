import axios from 'axios';
import { SET_HOME_TOP, SET_HOME_MIDDLE, SET_HOME_BOTTOM } from './types';

export function setHomeTop(inp) {
	localStorage.setItem(SET_HOME_TOP, inp)
	return { type: SET_HOME_TOP, payload: inp }
}

export function setHomeMiddle(inp) {
	localStorage.setItem(SET_HOME_MIDDLE, inp)
	return { type: SET_HOME_MIDDLE, payload: inp }
}

export function setHomeBottm(inp) {
	localStorage.setItem(SET_HOME_BOTTOM, inp)
	return { type: SET_HOME_BOTTOM, payload: inp }
}
