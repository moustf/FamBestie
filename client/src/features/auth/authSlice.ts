import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';

import { UserData, InitialState, AppDispatch } from '../../utils/interfaces/redux';

const initialState: InitialState = {
  userData: {
    data: {
      id: 0,
      name: '',
      role: '',
    },
  },
  isLoading: true,
  error: '',
};

// ! The main auth slice.
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<UserData>) {
      state.isLoading = false;
      state.userData = action.payload;
    },
    setError(state, action: PayloadAction<unknown>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// ? Action creator function START.

export const createUserDataAction = (payload: any): {
  type: string, payload: UserData,
} => ({
  type: 'auth/setUserData',
  payload,
});

export const createErrorAction = (payload: unknown): {
  type: string, payload: unknown,
} => ({
  type: 'auth/setError',
  payload,
});

// ? Action creator function END.

// ? State selector function START.

export const selectUserData = createSelector(
  // * First, pass one or more "input selector" functions.
  (state: InitialState) => state.userData,
  // * Then the return output, we can do any logic with it.
  (userData) => userData,
);

export const selectError = createSelector(
  (state: InitialState) => state.error,
  (error) => error,
);

// ? State selector function END.

// ? Thunk function and its fetch helper function START.

export const fetchUserData = () => async (dispatch: AppDispatch) => {
  const fetchData = async (): Promise<AxiosResponse<UserData, unknown>> => (
    axios.get('/auth/user')
  );
  useQuery({
    queryKey: ['userData'],
    queryFn: fetchData,
    onSuccess: ({
      data: { data: { id, name, role } },
    }) => dispatch(createUserDataAction({ id, name, role })),
    onError: (error) => dispatch(createErrorAction(error)),
  });
};

// ? Thunk function and its fetch helper function END.

export const { setUserData, setError } = authSlice.actions;
export const authReducer = authSlice.reducer;
