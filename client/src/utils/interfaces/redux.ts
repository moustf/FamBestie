import { store } from '../../store';

export interface UserData {
  [x: string]: any;
  id: number,
  name: string,
  role: string,
}

export interface InitialState {
  userData: UserData,
  isLoading: boolean,
  error: unknown,
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
