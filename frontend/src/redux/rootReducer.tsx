import { combineReducers } from 'redux';
import authReducer from './authSlice.tsx';
import movieReducer from './moviesSlice.tsx';

const rootReducer = combineReducers({
  auth: authReducer,
  movie: movieReducer,
});

export default rootReducer;