import {applyMiddleware, combineReducers, createStore} from 'redux';

import themeReducer from './reducer/themeReducer';

const reducers = combineReducers({
  themeReducer,
});

// mount it on the Store
const store = createStore(reducers);

export default store;
