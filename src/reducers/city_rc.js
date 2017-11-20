import { GET_CITIES, ADD_CITY, REMOVE_CITY, CITY_LOAD, CLEAN_CITY } from '../actions/types'

let cityDef = { cityLoading: false, error: '', cities: [] }

export default function (state = cityDef, action) {
	switch (action.type) {
		case CITY_LOAD:
			return { ...state, cityLoading: true, }
		case GET_CITIES:
			return { ...state, cityLoading: false, cities: action.payload }
		case CLEAN_CITY:
			return { ...state, cityLoading: false, cities: [] }
		case ADD_CITY:
			return { ...state, cityLoading: false, cities: [ ...state.cities, action.payload ] }
		case REMOVE_CITY:
			let cities = state.cities.filter(shahr => shahr._id !== action.payload);
      return { ...state, cityLoading: false, cities: cities }
		default:
			return state;
	}
}
