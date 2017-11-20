import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeCity } from '../../actions';
import Weather from '../Weather'

class City extends Component {
  remove(id) {
    console.log('id az remove city', id);
    this.props.removeCity(id);
  }
  render() {
  	return (
  		<div className='grid-dore'>
  			<div className='dore'>
  				<div className='aksdore'>
            <div className='wrapper-weather'>
              <Weather weatherType={this.props.weatherType}/>
    				</div>
  				</div>
  				<div className='sarfasl'>
  					<div className='namedore'>
  						<div className='namedore-esm-asli'>{this.props.name}</div>
  						<div className='namedore-esm-asli'>{this.props.enName}</div>
  					</div>
  				</div>
          <div className='paddah'>
    				<Link className='dogme i-round i-sabz temamsafe' to={{
    					pathname: `/shahrha/virashahr/${ this.props._id }`
    				}}>
    					ویرایش
    				</Link>
    				<span
              onClick={this.remove.bind(this, this.props._id)}
              className='dogme i-round i-ghermez temamsafe'
            >
    					حذف
    				</span>
          </div>
  			</div>
  		</div>
  	)
  }
}

export default connect(null, { removeCity })(City);
