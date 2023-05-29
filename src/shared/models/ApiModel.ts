// ENUMS

export enum EndpointOrderType {
  Asc = 'asc',
  Desc = 'desc',
}

export enum EndpointSortType {
  Reputation = 'reputation',
}

// MODELS

export interface ApiModel {
  url: string;
  version: number;
}

export interface EndpointModel {
  path: string;
  pageSize: number;
  orderBy: EndpointOrderType;
  sortBy: EndpointSortType;
  site: string;
}