import {combineReducers} from 'redux';

// Mock user
const userInfo = {
  nom: 'Clément',
  prenom: 'Kévin',
  statut: 'Débutant',
  abonnement: 'Standard',
  date_creation: '06 . 05 . 2023',
};

function user(state = null, action) {
  switch (action.type) {
    case 'SET_USER':
      return action.user;
    case 'LOGIN': // Mock
      return userInfo;
    case 'LOGOUT':
      return null;
    default:
      return state;
  }
}

function isAuthenticated(state = false, action) {
  switch (action.type) {
    case 'LOGIN':
      return true;
    case 'LOGOUT':
      return false;
    default:
      return state;
  }
}

const userReducer = combineReducers({
  user,
  isAuthenticated,
});

export default userReducer;
