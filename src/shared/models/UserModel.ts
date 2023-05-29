export interface UserModel {
  account_id: number;
  imgUrl: string;
  name: string;
  reputation: number;
  isFollowed: boolean;
  isBlocked: boolean;
}