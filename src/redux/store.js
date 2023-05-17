import {applyMiddleware, combineReducers, createStore} from 'redux';

import themeReducer from './reducer/themeReducer';
import userReducer from './reducer/user';

const reducers = combineReducers({
  themeReducer,
  userReducer,
});

// mount it on the Store
const store = createStore(reducers);

export default store;
