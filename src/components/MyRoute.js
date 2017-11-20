import React, { Component } from 'react';
import { Route, NavLink, Link, Switch } from 'react-router-dom';
import Home from './Home'
import NotFind from './NotFind'
import Manage from './Manage'

class MyRoute extends Component {
  render() {
    return (
      <div className='darbar-asli'>
        <div className='tamam-safe'>
          <Link to='/manage/city' className='dogm-modir'>مدیریت</Link>
        </div>

        <div className='tamam-safe'>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/manage' component={Manage}/>
            <Route component={NotFind}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default MyRoute;
