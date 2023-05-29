import { ActionType } from '../action-types';
import { UserModel } from '../../shared/models/UserModel';

interface FetchUserAction {
  type: ActionType.FETCH_USERS;
}

interface FetchUserActionSuccess {
  type: ActionType.FETCH_USERS_SUCCESS;
  payload: UserModel[];
}

interface FetchUserActionError {
  type: ActionType.FETCH_USERS_ERROR;
  payload: string;
}

interface BlockUser {
  type: ActionType.USER_TOGGLE_BLOCK;
  payload: number;
}
interface ToggleFollowUser {
  type: ActionType.USER_TOGGLE_FOLLOW;
  payload: number;
}

export type Action = FetchUserAction | FetchUserActionSuccess | FetchUserActionError | BlockUser | ToggleFollowUser;

