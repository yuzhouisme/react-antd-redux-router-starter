import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import example from './example';
const rootReducer = combineReducers({
  routing: routeReducer,
  example
});

export default rootReducer;
