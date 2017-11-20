import axios from 'axios';
import { GET_VIDEOS, ADD_VIDEO, REMOVE_VIDEO, VIDEO_LOAD, ADD_VIDEO_ERR, RU } from './types';

export function getVideos() {
	return function ( dispatch ) {
    dispatch( { type: VIDEO_LOAD } )
		return axios.get( `${ RU }/cities`, {
			headers: { sabti: localStorage.getItem( 'token' ) }
		} ).then( resp => {
      console.log('getVideos VideoAct', resp.data.cities);
			return dispatch( { type: GET_VIDEOS, payload: resp.data.cities } )
		} ).catch( ( e ) => {
      // dispatch( { type: SHAHR_ERR } )
		} )
	}
}

export function addVideo( { name, enName, timeDelay, dama, toloeKhorshid, azanSobh, azanZohr, azanMaghreb, nimeShab, weatherType } ) {
	return function ( dispatch ) {
    dispatch( { type: VIDEO_LOAD } )
		return axios.post( `${ RU }/city/add`, { name, enName, timeDelay, dama, toloeKhorshid, azanSobh, azanZohr, azanMaghreb, nimeShab, weatherType }, {
			headers: { sabti: localStorage.getItem( 'token' ) }
		} ).then( resp => {
	    return dispatch( { type: ADD_VIDEO, payload: resp.data.city } );
		} ).catch( ( error ) => {
			return dispatch( { type: ADD_VIDEO_ERR } );
		} );
	}
}

export function removeVideo( id ) {
	return function ( dispatch ) {
    dispatch( { type: VIDEO_LOAD } )
		return axios.post( `${ RU }/city/remove`, { id }, {
			headers: { sabti: localStorage.getItem( 'token' ) }
		} ).then( resp => {
			return dispatch( { type: REMOVE_VIDEO, payload: id } );
		} ).catch( ( error ) => {
			// dispatch( { type: SHAHR_ERR } );
		} );
	}
}
