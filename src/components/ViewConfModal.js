import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Field, reduxForm, change } from 'redux-form'
import { setHomeTop, setHomeMiddle, setHomeBottm, SET_HOME_BOTTOM } from '../actions'

class viewConfModal extends Component {
  componentWillMount() {
    console.log(this.props.initialValues);
  }
  onSubmitForm({homeTop, homeMiddle, homeBottom}) {
    this.props.setHomeTop(homeTop);
    this.props.setHomeMiddle(homeMiddle);
    this.props.setHomeBottm(homeBottom);

    this.props.history.push('/manage/city');
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

  render() {

    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <div className='modal-darbar'>
        <div className='modal'>

          <form onSubmit={handleSubmit(this.onSubmitForm.bind(this))}>
            <div className='form-item'>
              <div className='form-tak'>
                <label> بخش بالای خانه </label>
                <Field name="homeTop" component='input' type='number' />
              </div>
              <div className='form-tak'>
                <label> بخش وسط خانه </label>
                <Field name="homeMiddle" component='input' type='number' />
              </div>
              <div className='form-tak'>
                <label> بخش پایین خانه </label>
                <Field name="homeBottom" component='input' type='number' />
              </div>
            </div>

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

viewConfModal = reduxForm({
	form: 'viewConfModal',
  validate
})(viewConfModal);

const msp = ({ views }) => {
  return {
    initialValues : {homeTop: parseInt(views.homeTop), homeMiddle: parseInt(views.homeMiddle), homeBottom: parseInt(views.homeBottom)}
  }
}

export default connect(msp, { setHomeTop, setHomeMiddle, setHomeBottm })(viewConfModal);
