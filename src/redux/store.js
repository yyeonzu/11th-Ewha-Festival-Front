import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import thunk from 'redux-thunk';
import userReducer from './userSlice';
import boothReducer from './boothSlice';
import mypageReducer from './pageSlice';

const reducers = combineReducers({
  user: userReducer,
  booth: boothReducer,
  page: mypageReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
