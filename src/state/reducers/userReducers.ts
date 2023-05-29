import { ActionType } from '../action-types';
import { Action } from '../actions';
import { UserModel } from '../../shared/models/UserModel';

interface UsersState {
  loading: boolean;
  error: string | null;
  data: UserModel[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
}

const userReducer = (state: UsersState = initialState, action: Action): UsersState => {
  switch(action.type) {
    case ActionType.FETCH_USERS:
      return {
        loading: true,
        error: null,
        data: [],
      }
    case ActionType.FETCH_USERS_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      }
    case ActionType.FETCH_USERS_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: [],
      }
    default:
      return state;
  }
}; 

export default userReducer;