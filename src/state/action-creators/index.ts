import axios from 'axios';
import { ActionType } from '../action-types';
import { Action } from '../actions';
import { Dispatch } from 'redux';

import { API, USER_ENDPOINT } from '../../shared/static/api';
import { ServerItemModel } from '../../shared/models/ServerResponseModel';

export const fetchUsers = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FETCH_USERS
    });

    try {
      // const {data} = await axios.get(`${API.url}/${API.version}/${USER_ENDPOINT.path}`, {
      //   params: {
      //     pagesize: USER_ENDPOINT.pageSize,
      //     order: USER_ENDPOINT.orderBy,
      //     sort: USER_ENDPOINT.sortBy,
      //     site: USER_ENDPOINT.site,
      //   }
      // });

      const data = {
        "items": [
          {
            "badge_counts": {
              "bronze": 9169,
              "silver": 9094,
              "gold": 859
            },
            "account_id": 11683,
            "is_employee": false,
            "last_modified_date": 1685089521,
            "last_access_date": 1685097063,
            "reputation_change_year": 26988,
            "reputation_change_quarter": 9863,
            "reputation_change_month": 4735,
            "reputation_change_week": 965,
            "reputation_change_day": 30,
            "reputation": 1404431,
            "creation_date": 1222430705,
            "user_type": "registered",
            "user_id": 22656,
            "accept_rate": 86,
            "location": "Reading, United Kingdom",
            "website_url": "http://csharpindepth.com",
            "link": "https://stackoverflow.com/users/22656/jon-skeet",
            "profile_image": "https://www.gravatar.com/avatar/6d8ebb117e8d83d74ea95fbdd0f87e13?s=256&d=identicon&r=PG",
            "display_name": "Jon Skeet"
          },
          {
            "badge_counts": {
              "bronze": 9169,
              "silver": 9094,
              "gold": 859
            },
            "account_id": 11683,
            "is_employee": false,
            "last_modified_date": 1685089521,
            "last_access_date": 1685097063,
            "reputation_change_year": 26988,
            "reputation_change_quarter": 9863,
            "reputation_change_month": 4735,
            "reputation_change_week": 965,
            "reputation_change_day": 30,
            "reputation": 1404431,
            "creation_date": 1222430705,
            "user_type": "registered",
            "user_id": 22656,
            "accept_rate": 86,
            "location": "Reading, United Kingdom",
            "website_url": "http://csharpindepth.com",
            "link": "https://stackoverflow.com/users/22656/jon-skeet",
            "profile_image": "https://www.gravatar.com/avatar/6d8ebb117e8d83d74ea95fbdd0f87e13?s=256&d=identicon&r=PG",
            "display_name": "Jon Skeet"
          },
          {
            "badge_counts": {
              "bronze": 9169,
              "silver": 9094,
              "gold": 859
            },
            "account_id": 11683,
            "is_employee": false,
            "last_modified_date": 1685089521,
            "last_access_date": 1685097063,
            "reputation_change_year": 26988,
            "reputation_change_quarter": 9863,
            "reputation_change_month": 4735,
            "reputation_change_week": 965,
            "reputation_change_day": 30,
            "reputation": 1404431,
            "creation_date": 1222430705,
            "user_type": "registered",
            "user_id": 22656,
            "accept_rate": 86,
            "location": "Reading, United Kingdom",
            "website_url": "http://csharpindepth.com",
            "link": "https://stackoverflow.com/users/22656/jon-skeet",
            "profile_image": "https://www.gravatar.com/avatar/6d8ebb117e8d83d74ea95fbdd0f87e13?s=256&d=identicon&r=PG",
            "display_name": "Jon Skeet"
          },{
            "badge_counts": {
              "bronze": 9169,
              "silver": 9094,
              "gold": 859
            },
            "account_id": 11683,
            "is_employee": false,
            "last_modified_date": 1685089521,
            "last_access_date": 1685097063,
            "reputation_change_year": 26988,
            "reputation_change_quarter": 9863,
            "reputation_change_month": 4735,
            "reputation_change_week": 965,
            "reputation_change_day": 30,
            "reputation": 1404431,
            "creation_date": 1222430705,
            "user_type": "registered",
            "user_id": 22656,
            "accept_rate": 86,
            "location": "Reading, United Kingdom",
            "website_url": "http://csharpindepth.com",
            "link": "https://stackoverflow.com/users/22656/jon-skeet",
            "profile_image": "https://www.gravatar.com/avatar/6d8ebb117e8d83d74ea95fbdd0f87e13?s=256&d=identicon&r=PG",
            "display_name": "Jon Skeet"
          },{
            "badge_counts": {
              "bronze": 9169,
              "silver": 9094,
              "gold": 859
            },
            "account_id": 11683,
            "is_employee": false,
            "last_modified_date": 1685089521,
            "last_access_date": 1685097063,
            "reputation_change_year": 26988,
            "reputation_change_quarter": 9863,
            "reputation_change_month": 4735,
            "reputation_change_week": 965,
            "reputation_change_day": 30,
            "reputation": 1404431,
            "creation_date": 1222430705,
            "user_type": "registered",
            "user_id": 22656,
            "accept_rate": 86,
            "location": "Reading, United Kingdom",
            "website_url": "http://csharpindepth.com",
            "link": "https://stackoverflow.com/users/22656/jon-skeet",
            "profile_image": "https://www.gravatar.com/avatar/6d8ebb117e8d83d74ea95fbdd0f87e13?s=256&d=identicon&r=PG",
            "display_name": "Jon Skeet"
          }
        ],
        "has_more": true,
        "quota_max": 300,
        "quota_remaining": 298
      }


      const remodelData = data.items.map((i: ServerItemModel) => {
        return {
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