import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string | null;
  userName: string | null;
  email: string | null;
  isLoggedIn: boolean;
  role: string | null;
}

const initialState: User = {
  id: null,
  userName: null,
  email: null,
  isLoggedIn: false,
  role: null,
};

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ id: string; userName: string; email: string }>
    ) => {
      state.id = action.payload.id;
      state.userName = action.payload.userName;
      state.email = action.payload.email;
      state.isLoggedIn = true;
      state.role = "user";
    },
    logoutUser: (state) => {
      state.id = null;
      state.userName = null;
      state.email = null;
      state.isLoggedIn = false;
      state.role = null;
    },
  },
});

export const { setUser, logoutUser } = userAuthSlice.actions;
export default userAuthSlice.reducer;
