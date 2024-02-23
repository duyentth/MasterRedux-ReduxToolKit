import {
  createAction,
  createReducer,
  createSlice,
  nanoid,
} from "@reduxjs/toolkit";

// //create action
// export const addEmpl = createAction("ADD_EMPL");

// //create reducer
// const employeeReducer = createReducer([], (builder) => {
//   builder.addCase("ADD_EMPL", (state, action) => {
//     state.push({ id: nanoid(), name: action.payload.name });
//   });
// });

// export default employeeReducer;

//create Slice
let id = 0;
const emplSlice = createSlice({
  name: "employee",
  initialState: [],
  reducers: {
    addEmpl(state, action) {
      state.push({ id: ++id, name: action.payload.name });
    },
  },
});
export const { addEmpl } = emplSlice.actions;
export default emplSlice.reducer;
