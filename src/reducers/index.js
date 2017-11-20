import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import cities from './city_rc'
import views from './view_rc'

const rootReducer = combineReducers({
  form,
  cities,
  views,
});

export default rootReducer;
