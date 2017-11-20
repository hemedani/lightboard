import axios from 'axios';
import { GET_CITIES, ADD_CITY, REMOVE_CITY, CITY_LOAD, ADD_CITY_ERR, RU } from './types';

export function getCities() {
	return function ( dispatch ) {
    dispatch( { type: CITY_LOAD } )
		return axios.get( `${ RU }/cities`, {
			headers: { sabti: localStorage.getItem( 'token' ) }
		} ).then( resp => {
      console.log('getCities CityAct', resp.data.cities);
			return dispatch( { type: GET_CITIES, payload: resp.data.cities } )
		} ).catch( ( e ) => {
      // dispatch( { type: SHAHR_ERR } )
		} )
	}
}

export function addCity( { name, enName, timeDelay, dama, toloeKhorshid, azanSobh, azanZohr, azanMaghreb, nimeShab, weatherType } ) {
	return function ( dispatch ) {
    dispatch( { type: CITY_LOAD } )
		return axios.post( `${ RU }/city/add`, { name, enName, timeDelay, dama, toloeKhorshid, azanSobh, azanZohr, azanMaghreb, nimeShab, weatherType }, {
			headers: { sabti: localStorage.getItem( 'token' ) }
		} ).then( resp => {
	    return dispatch( { type: ADD_CITY, payload: resp.data.city } );
		} ).catch( ( error ) => {
			return dispatch( { type: ADD_CITY_ERR } );
		} );
	}
}

export function removeCity( id ) {
	return function ( dispatch ) {
    dispatch( { type: CITY_LOAD } )
		return axios.post( `${ RU }/city/remove`, { id }, {
			headers: { sabti: localStorage.getItem( 'token' ) }
		} ).then( resp => {
			return dispatch( { type: REMOVE_CITY, payload: id } );
		} ).catch( ( error ) => {
			// dispatch( { type: SHAHR_ERR } );
		} );
	}
}
