import store from "..";
import { _setActiveTab } from "./index";

export const setActiveData = (data, context = 'main') => {
  if (context === 'main') {
    store.dispatch(_setActiveTab(data));
  } else {
    store.dispatch(_setActiveTab({ context, tab: data }));
  }
};