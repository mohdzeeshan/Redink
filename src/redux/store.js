import {configureStore, combineReducers} from '@reduxjs/toolkit';
import authReducer from './reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const reducer = combineReducers({auth: authReducer});
const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
