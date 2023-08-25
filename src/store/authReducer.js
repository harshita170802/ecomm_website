import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isUserLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isUserLoggedIn = true;
    },
    clearUser: (state) => {
      state.user = null;
      state.isUserLoggedIn = false;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
