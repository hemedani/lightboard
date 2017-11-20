import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Field, reduxForm, change } from 'redux-form'
import { addCity, ADD_CITY } from '../../actions'
import cx from 'classnames'
import _ from 'lodash'
import Weather from '../Weather'

class addCityModal extends Component {
	constructor( props ) {
		super( props );
		this.state = {
      weatherType: 'sun-shower'
		};

	}
  onSubmitForm({name, enName, timeDelay, dama, toloeKhorshid, azanSobh, azanZohr, azanMaghreb, nimeShab}) {
		const { weatherType } = this.state;
    this.props.addCity({name, enName, timeDelay, dama, toloeKhorshid, azanSobh, azanZohr, azanMaghreb, nimeShab, weatherType})
      .then((resp) => {
        if (resp.type === ADD_CITY) {
          this.props.history.push('/manage/city');
        }
      });
  }

	renderError() {
		if (this.props.errorMassage) {
			return (
				<div className='alert alert-danger'>
					<strong>Akey!!</strong>
					{this.props.errorMassage}
				</div>
			)
		}
	}

	weatherItemClick(c) {
		this.setState({ weatherType: c });
	}

  render() {

    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <div className='modal-darbar'>
        <div className='modal'>
            { /*
              <form onSubmit={this._handleSubmit}>
                <input type="input" defaultValue={this.props.karbar.email} />

                <button type="submit" onClick={this._handleSubmit}>اضافه کردن ایستگاه</button>

                <Link to={`/istgah`} className='btn'> هیچی </Link>
              </form>
            */ }

          <form onSubmit={handleSubmit(this.onSubmitForm.bind(this))}>
            <div className='form-item'>
              <div className='form-tak'>
                <label> نام شهر </label>
                <Field name="name" component='input' label=' نام' />
              </div>
              <div className='form-tak'>
                <label> نام انگلیسی </label>
                <Field name="enName" component='input' label=' نام انگلیسی ' />
              </div>
              <div className='form-tak'>
                <label> اختلاف ساعت </label>
                <Field name="timeDelay" component='input' type='number' label=' نام انگلیسی ' />
              </div>
              <div className='form-tak'>
                <label> دما </label>
                <Field name="dama" component='input' type='number' label=' نام انگلیسی ' />
              </div>
              <div className='form-tak'>
                <label>طلوع خورسید </label>
                <Field name="toloeKhorshid" component='input' />
              </div>
              <div className='form-tak'>
                <label>اذان صبح </label>
                <Field name="azanSobh" component='input' />
              </div>
              <div className='form-tak'>
                <label>اذان ظهر </label>
                <Field name="azanZohr" component='input' />
              </div>
              <div className='form-tak'>
                <label>اذان مغرب </label>
                <Field name="azanMaghreb" component='input' />
              </div>
              <div className='form-tak'>
                <label> نیمه شب </label>
                <Field name="nimeShab" component='input' />
              </div>
            </div>
            <hr />
						<h3 className='h3-vaziyat-abo-hava'>وضعیت آب و هوا</h3>

            <div className='wrapper-weather'>

              <div className={cx('weather-item-btn', {'active-weather-item': (this.state.weatherType === 'sun-shower')})} onClick={this.weatherItemClick.bind(this, 'sun-shower')}>
								<Weather weatherType='sun-shower'/>
              </div>

              <div className={cx('weather-item-btn', {'active-weather-item': (this.state.weatherType === 'thunder-storm')})} onClick={this.weatherItemClick.bind(this, 'thunder-storm')}>
								<Weather weatherType='thunder-storm'/>
              </div>

              <div className={cx('weather-item-btn', {'active-weather-item': (this.state.weatherType === 'cloudy')})} onClick={this.weatherItemClick.bind(this, 'cloudy')}>
								<Weather weatherType='cloudy'/>
              </div>

              <div className={cx('weather-item-btn', {'active-weather-item': (this.state.weatherType === 'flurries')})} onClick={this.weatherItemClick.bind(this, 'flurries')}>
								<Weather weatherType='flurries'/>
              </div>

              <div className={cx('weather-item-btn', {'active-weather-item': (this.state.weatherType === 'sunny')})} onClick={this.weatherItemClick.bind(this, 'sunny')}>
								<Weather weatherType='sunny'/>
              </div>

              <div className={cx('weather-item-btn', {'active-weather-item': (this.state.weatherType === 'rainy')})} onClick={this.weatherItemClick.bind(this, 'rainy')}>
								<Weather weatherType='rainy'/>
              </div>

            </div>

            <hr />

            {this.renderError()}
            <button type="submit" disabled={submitting} className='dogme i-round i-abi temamsafe'>ذخیره</button>

            <Link to={`/manage/city`} className='dogme i-round i-abi temamsafe'> بازگشت </Link>

          </form>
        </div>
      </div>
    )
  }

}

const validate = values => {

  const errors = {}


  return errors;
}

addCityModal = reduxForm({
	form: 'addCityModal',
  validate
})(addCityModal);

export default connect(null, { addCity })(addCityModal);
