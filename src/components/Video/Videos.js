import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { getVideos } from '../../actions';

import Video from './Video';

class Videos extends Component {
	componentWillMount( ) {
		this.props.getVideos();
	}
	render( ) {
		let { videos } = this.props;
		console.log( 'videos az render videos Component', videos );
		return (
			<div className='lafaf-80 fasbaghal'>
				<div className='grid'>
					<h1>شهر ها</h1>
					<div className='poshtzamine'>
						<Link to='/manage/video/add' className='dogme i-round i-abi temamsafe'>
							افزودن ویدیو
						</Link>
            {videos.videoLoading ? (
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
  							{videos.videos.map(( video, i ) => ( <Video key={i} {...video}/> ))}
  						</div>
            )}
					</div>
				</div>
				<br/>
			</div>
		);
	}
}

const mps = ({ videos }) => ({ videos });

export default connect(mps, { getVideos })( Videos );
