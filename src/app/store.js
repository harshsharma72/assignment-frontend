import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../features/student/studentSlice.js";
import signupReducer from "../features/Signup/signupSlice.js";
import loginReducer from "../features/login/loginSlice.js";
export const store = configureStore({
  reducer: {
    student: studentReducer,
    login: loginReducer,
    signup: signupReducer,
  },
});
