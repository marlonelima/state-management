import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: false,
};

export const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    toggle: (state) => {
      state.active = !state.active;
    },
  },
});

export const { toggle } = applicationSlice.actions;

export default applicationSlice.reducer;
