import { combineReducers } from 'redux';
import authReducer from './authReducer';
import articleReducer from './articleReducer';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  article: articleReducer,
  ui: uiReducer
});

export default rootReducer;
