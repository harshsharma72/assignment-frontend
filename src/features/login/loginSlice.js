import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    clearCredentials: (state) => {
      state.email = "";
      state.password = "";
    },
  },
});

export const { setCredentials, clearCredentials } = loginSlice.actions;
export default loginSlice.reducer;
