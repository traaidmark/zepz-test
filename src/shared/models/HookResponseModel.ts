export interface HookResponseModel<T> {
  data: T;
  isLoading: boolean;
  error: Error | undefined;
}