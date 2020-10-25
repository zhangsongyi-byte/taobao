import { combineReducers } from 'redux';

/* page */
import homepage from '../../Feature/HomePage/state/homepage-reducer';
import user from '../../Feature/UserCenter/state/user-reducer';
import mall from '../../Feature/Mall/state/mall-reducer';
/* global */

const rootReducer = combineReducers({
  homepage,
  user,
  mall
});

export default rootReducer;