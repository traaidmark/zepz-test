import axios from 'axios';
import { ActionType } from '../action-types';
import { Action } from '../actions';
import { Dispatch } from 'redux';

import { API, USER_ENDPOINT } from '../../shared/static/api';
import { ServerItemModel } from '../../shared/models/ServerResponseModel';
import { UserModel } from '../../shared/models/UserModel';

export const fetchUsers = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FETCH_USERS
    });

    try {
      const {data} = await axios.get(`${API.url}/${API.version}/${USER_ENDPOINT.path}`, {
        params: {
          pagesize: USER_ENDPOINT.pageSize,
          order: USER_ENDPOINT.orderBy,
          sort: USER_ENDPOINT.sortBy,
          site: USER_ENDPOINT.site,
        }
      });

      const remodelData: UserModel[] = data.items.map((i: ServerItemModel) => {
        return {
          account_id: i.account_id,
          imgUrl: i.profile_image,
          name: i.display_name,
          reputation: i.reputation,
          isBlocked: false,
          isFollowed: false,
        };
      })

      dispatch({
        type: ActionType.FETCH_USERS_SUCCESS,
        payload: remodelData,
      })

    } catch(e) {
      if (e instanceof Error) {
        dispatch({
          type: ActionType.FETCH_USERS_ERROR,
          payload: e.message,
        });
      }
    }
  }
};

export const blockUser = (id: number) => {
  return (dispatch: Dispatch<Action>) => {

    dispatch({
      type: ActionType.USER_TOGGLE_BLOCK,
      payload: id,
    })

  };
};

export const toggleFollow = (id: number) => {
  return (dispatch: Dispatch<Action>) => {

    dispatch({
      type: ActionType.USER_TOGGLE_FOLLOW,
      payload: id,
    })

  };
};