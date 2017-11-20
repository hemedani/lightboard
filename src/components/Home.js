import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getCities } from '../actions'
import cx from 'classnames'
import _ from 'lodash'
import Weather from './Weather'
import moment from 'moment-jalaali';

// { setTimeout(() => (moment().format('jMMMM jDo jYYYY, h:mm:ss a')), 1000) }
class Home extends Component {
	constructor( props ) {
		super( props );
		moment.loadPersian({dialect: 'persian-modern'})
		this.state = {
      weatherType: 'sun-shower',
			moment: moment().format('jDo jMMMM jYYYY, h:mm:ss a'),
			enters: [
				{
					id: 1,
					en: 'EXIT 11',
					fa: 'خروجی ۱۱'
				},
				{
					id: 2,
					en: 'EXIT 12',
					fa: 'خروجی ۱۲'
				},
				{
					id: 3,
					en: 'EXIT 13',
					fa: 'خروجی ۱۳'
				},
				{
					id: 4,
					en: 'EXIT 14',
					fa: 'خروجی ۱۴'
				}
			],
			activeEnters: []
		};
		this.interval();

	}
	componentWillMount( ) {
		this.props.getCities();
		console.log(this.props.views);
	}
	interval() {
		setInterval( () => {
			this.setState({ moment: moment().format('jDo jMMMM jYYYY, h:mm:ss a') })
		}, 1000)
	}
  render() {

    const { handleSubmit, pristine, reset, submitting, views } = this.props;

    return (
      <div className='khane'>
				<div className='home-top' style={{height: (views.homeTop || '2vh')}}></div>
				<div className='home-middle' style={{height: (views.homeMiddle || '93vh')}}>
					<div className='middle-col-1'>
						<div className='illigal-wares middle-box home-box'>
							<div className='illigal-col-1'>
								<h2>اقلام ممنوعه</h2>
								<h4>Prohibited items</h4>
							</div>
							<div className='illigal-col-2'><img src='./img/hookah.png' /></div>
							<div className='illigal-col-3'>
								<h4>قلیان</h4>
								<h4>Hookah</h4>
							</div>
						</div>
						<div className='enter-men enter-gates middle-box home-box'>
							<div className='with-icon' >
								<div className='text'>
									<h3>بازرسی</h3>
									<h2>برادران</h2>
								</div>
								<img src='./img/muslim-man.png' />
							</div>
							<div className='en-gates'>MEN INSPECTION</div>
						</div>
					</div>

					<div className='middle-col-2'>
						<div className='middle-box video-player home-box'>
								<video autoPlay loop muted>
								  <source src='./video/damavand.mp4' type='video/mp4' />
								  Your browser does not support the video tag.
								</video>
						</div>
						<div className='middle-box gates'>

							{this.state.enters.map((enter) => (
								<div className={cx('enters home-box', {'active-enter': _.includes(this.state.activeEnters, enter.id)})} key={enter.id} onClick={() => {
											let { activeEnters } = this.state;
											activeEnters = _.xor(activeEnters, [enter.id])
											this.setState({ activeEnters })
											console.log( activeEnters );
										}}>
									<div>{enter.fa}</div>
									<div>{enter.en}</div>
								</div>

							))}
						</div>
					</div>

					<div className='middle-col-3'>
						<div className='middle-box weather home-box'>
							<div className='weather-icon-wraper'>
								<Weather weatherType='sun-shower'/>
							</div>
							<div className='city-details'>
								<h2>تهران</h2>
								<h1>27°</h1>
							</div>
						</div>
						<div className='middle-box oghat home-box'>
							<h2>اوقات شرعی</h2>
							<div className='oghat-date'>{this.state.moment}</div>
							<div className='oghat-details'>
								<span className='oghat-detail-1'>طلوع خورشید</span>
								<span className='oghat-detail-2'>۵:۴۵</span>

								<span className='oghat-detail-1'>اذان صبح</span>
								<span className='oghat-detail-2'>۵:۴۵</span>

								<span className='oghat-detail-1'>اذان ظهر</span>
								<span className='oghat-detail-2'>۵:۴۵</span>

								<span className='oghat-detail-1'>اذان مغرب</span>
								<span className='oghat-detail-2'>۵:۴۵</span>

								<span className='oghat-detail-1'>نیمه شب</span>
								<span className='oghat-detail-2'>۵:۴۵</span>
							</div>
						</div>
						<div className='middle-box enter-women enter-gates home-box'>
							<div className='with-icon' >
								<div className='text'>
									<h3>بازرسی</h3>
									<h2>خواهران</h2>
								</div>
								<img src='./img/muslim-woman.png' />
							</div>
							<div className='en-gates'>WOMEN INSPECTION</div>
						</div>
					</div>
				</div>
				<div className='home-bottom' style={{height: (views.homeBottom || '5vh')}}></div>
      </div>
    );
  }
}

const msp = ({ cities, views }) => ({ cities, views });

export default connect(msp, { getCities })(Home);
