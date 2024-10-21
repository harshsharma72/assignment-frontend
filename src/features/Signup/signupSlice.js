import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [],
  status: "idle",
  error: null,
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    setLoading: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { addStudent, setLoading, setError } = signupSlice.actions;

export default signupSlice.reducer;
