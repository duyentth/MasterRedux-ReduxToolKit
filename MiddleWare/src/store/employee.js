import { createSlice } from "@reduxjs/toolkit";

//create Slice
let id = 0;
const emplSlice = createSlice({
  name: "employee",
  initialState: [],
  reducers: {
    addEmpl(state, action) {
      state.push({ id: ++id, name: action.payload.name });
    },
    showError(state, action) {
      console.log(action.payload.error);
    },
  },
});
export const { addEmpl, showError } = emplSlice.actions;
export default emplSlice.reducer;
