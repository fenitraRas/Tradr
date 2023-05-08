import {combineReducers} from 'redux';

function colorScheme(state = null, action) {
  switch (action.type) {
    case 'SET_THEME':
      return action.theme;
    default:
      return state;
  }
}

const themeReducer = combineReducers({
  colorScheme,
});

export default themeReducer;
