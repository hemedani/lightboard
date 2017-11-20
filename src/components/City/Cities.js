import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { getCities } from '../../actions';

import City from './City';

class Cities extends Component {
	componentWillMount( ) {
		this.props.getCities();
	}
	render( ) {
		let { cities } = this.props;
		console.log( 'cities az render cities Component', cities );
		return (
			<div className='lafaf-80 fasbaghal'>
				<div className='grid'>
					<h1>شهر ها</h1>
					<div className='poshtzamine'>
						<Link to='/manage/city/add' className='dogme i-round i-abi temamsafe'>
							افزودن شهر
						</Link>
            {cities.cityLoading ? (
              <div className='vorod-bargozari'>
		            <div className="ball-scale-ripple-multiple" >
									<div></div>
									<div></div>
									<div></div>
									<div></div>
		            </div>
              </div>
            ) : (
  						<div className='gimg'>
  							{cities.cities.map(( city, i ) => ( <City key={i} {...city}/> ))}
  						</div>
            )}
					</div>
				</div>
				<br/>
			</div>
		);
	}
}

const mps = ({ cities }) => ({ cities });

export default connect(mps, { getCities })( Cities );
