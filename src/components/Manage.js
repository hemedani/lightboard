import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import Cities from './City/Cities';
import AddCityModal from './City/AddCityModal';
import ViewConfModal from './ViewConfModal';

class Manage extends Component {
  render() {
    return (
      <div>
        <p>
          صفحه مدیریت
        </p>
        <NavLink className='dogme i-round i-firoz' to='/'>خانه</NavLink>
        <NavLink className='dogme i-round i-firoz' to='/manage/city'>شهرها</NavLink>
        <NavLink className='dogme i-round i-firoz' to='/manage/view/confing'>تنظیمات صفحه</NavLink>
        <Switch>
          <Route path='/manage/city' exact component={Cities}/>
          <Route path='/manage/city/add' exact component={AddCityModal}/>
          <Route path='/manage/view/confing' exact component={ViewConfModal}/>
        </Switch>
      </div>
    );
  }
}

export default Manage;
