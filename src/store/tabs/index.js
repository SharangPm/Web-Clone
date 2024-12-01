import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  main: localStorage.getItem("mainTab") || "for-you",
  notifications: localStorage.getItem("notificationsTab") || "all",
  explore: localStorage.getItem("exploreTab") || "for-you",
};

const tab = createSlice({
  name: "tab",
  initialState,
  reducers: {
    _setActiveTab: (state, action) => {
      if (typeof action.payload === "string") {
        state.main = action.payload;
        localStorage.setItem("mainTab", action.payload);
      } else {
        const { context, tab } = action.payload;
        state[context] = tab;
        localStorage.setItem(`${context}Tab`, tab);
      }
    },
  },
});

export const { _setActiveTab } = tab.actions;
export default tab.reducer;
