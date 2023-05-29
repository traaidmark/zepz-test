import { EndpointOrderType, EndpointSortType, ApiModel, EndpointModel } from '../models/ApiModel';

export const API: ApiModel = {
  url: 'https://api.stackexchange.com',
  version: 2.2,
}

export const USER_ENDPOINT: EndpointModel = {
  path: 'users',
  pageSize: 20,
  orderBy: EndpointOrderType.Desc,
  sortBy: EndpointSortType.Reputation,
  site: 'stackoverflow',
}

