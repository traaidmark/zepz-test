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
    case ActionType.USER_TOGGLE_BLOCK:
      return {
        loading: false,
        error: null,
        data: state.data.map(i => {
          if(i.account_id === action.payload) {
            return {
              ...i,
              isBlocked: i.isBlocked ? false : true,
              isFollowed: false,
            }
          }
          return i;
        }),
      }
      case ActionType.USER_TOGGLE_FOLLOW:
        return {
          loading: false,
          error: null,
          data: state.data.map(i => {
            if(i.account_id === action.payload) {
              return {
                ...i,
                isFollowed: i.isFollowed ? false : true,
              }
            }
            return i;
          }),
        }
    default:
      return state;
  }
}; 

export default userReducer;