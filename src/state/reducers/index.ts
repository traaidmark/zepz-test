import { combineReducers } from 'redux';

import userReducers from './userReducers';

const reducers = combineReducers({
  repositories: userReducers
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;