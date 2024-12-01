import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import appearance from "./appearance";
import tab from "./tabs/index";

const store = configureStore({
  reducer: {
    auth,
    appearance,
    tab
  },
});

export default store;
