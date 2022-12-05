import { createSlice } from "@reduxjs/toolkit";
const testsSlice = createSlice({
  name: "tests",
  initialState: {
    tests: [],
  },
  reducers: {
    addTitle(state, actions) {
        console.log(actions.payload);
      state.tests.push(actions.payload);
    },
    addQuestion(state, actions){

    }
  },
});
export const { addTitle, addQuestion } = testsSlice.actions;
export default testsSlice;
