import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [],
  loading: false,
  error: null,
};
const employeesSlice = createSlice({
  name: "employess",
  initialState,
  reducers: {
    //action:function
    apiRequested: (state, action) => {
      state.loading = true;
    },
    apiRequestFail: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    getEmployees: (state, action) => {
      state.employees = action.payload;
      state.loading = false;
    },
  },
});

export const { apiRequested, apiRequestFail, getEmployees } =
  employeesSlice.actions;
export default employeesSlice.reducer;
