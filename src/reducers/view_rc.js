import { SET_HOME_TOP, SET_HOME_MIDDLE, SET_HOME_BOTTOM } from '../actions/types'

let viewDef = { homeTop: '2vh', homeMiddle: '93vh', homeBottom: '5vh' }

export default function (state = viewDef, action) {
	switch (action.type) {
		case SET_HOME_TOP:
			console.log('az SET_HOME_TOP view_rc.js', action.payload);
			return { ...state, homeTop: action.payload + 'vh', }
		case SET_HOME_MIDDLE:
			return { ...state, homeMiddle: action.payload + 'vh', }
		case SET_HOME_BOTTOM:
			return { ...state, homeBottom: action.payload + 'vh', }
		default:
			return state;
	}
}
