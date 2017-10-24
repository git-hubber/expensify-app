import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

export const startLogin = (uid) => {
  return (dispatch) => {
    return firebase
      .auth()
      .signInWithPopup(googleAuthProvider);
  }
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = (props) => {
  return (dispatch) => {
    firebase
      .auth()
      .signOut();
  }
};
