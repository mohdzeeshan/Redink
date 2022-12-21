import {createSlice} from '@reduxjs/toolkit';
import Snackbar from 'react-native-snackbar';

const initAuthState = {
  isAuthenticated: false,
  currentUser: {},
  currentList: [],
  listItems: {},
  registeredUsers: {},
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initAuthState,
  reducers: {
    register: (state, action) => {
      if (state.registeredUsers.hasOwnProperty(action.payload.username)) {
        Snackbar.show({
          text: 'User already registered',
          backgroundColor: 'red',
          textColor: 'white',
          duration: Snackbar.LENGTH_SHORT,
        });
      } else {
        state.registeredUsers[action.payload.username] = {...action.payload};
        state.listItems[action.payload.username] = [];
        Snackbar.show({
          text: 'Registered Successfully',
          backgroundColor: 'green',
          textColor: 'white',
          duration: Snackbar.LENGTH_SHORT,
        });
      }
    },
    login: (state, action) => {
      if (state.registeredUsers.hasOwnProperty(action.payload.username)) {
        if (
          state.registeredUsers[action.payload.username].password ===
          action.payload.password
        ) {
          state.isAuthenticated = true;
          state.currentUser = state.registeredUsers[action.payload.username];
          state.currentList = state.listItems[action.payload.username] || [];
          Snackbar.show({
            text: 'logged in successfully',
            backgroundColor: 'green',
            textColor: 'white',
            duration: Snackbar.LENGTH_SHORT,
          });
        } else {
          Snackbar.show({
            text: 'Incorrect password',
            backgroundColor: 'red',
            textColor: 'white',
            duration: Snackbar.LENGTH_SHORT,
          });
        }
      } else {
        Snackbar.show({
          text: 'This user is not registered',
          backgroundColor: 'red',
          textColor: 'white',
          duration: Snackbar.LENGTH_SHORT,
        });
      }
    },
    logout: state => {
      state.isAuthenticated = false;
      state.user = {username: null, email: null, name: null, age: null};
      Snackbar.show({
        text: 'Logged out',
        backgroundColor: 'green',
        textColor: 'white',
        duration: Snackbar.LENGTH_SHORT,
      });
    },

    additem: (state, action) => {
      state.listItems[action.payload.username].push(action.payload.item);
      state.currentList = state.listItems[action.payload.username];
      Snackbar.show({
        text: 'Added to list',
        backgroundColor: 'green',
        textColor: 'white',
        duration: Snackbar.LENGTH_SHORT,
      });
    },
    removeItem: (state, action) => {
      state.listItems[action.payload.username].splice(action.payload.index, 1);
      state.currentList = state.listItems[action.payload.username];
      Snackbar.show({
        text: 'Removed from list',
        backgroundColor: 'red',
        textColor: 'white',
        duration: Snackbar.LENGTH_SHORT,
      });
    },
    emptyList: (state, action) => {
      state.listItems[action.payload.username] = [];
    },
  },
});
export const {login, register, logout, additem, removeItem, emptyList} =
  authSlice.actions;

export default authSlice.reducer;
