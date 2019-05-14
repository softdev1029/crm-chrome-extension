import { combineReducers } from 'redux';
import todos from './todos';
import routes from './routenames';

export default combineReducers({
  todos,
  routes
});
