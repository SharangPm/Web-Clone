import { useDispatch, useSelector } from "react-redux";
import { _setActiveTab } from "./index";

export const useTab = (context = "main") => {
  const dispatch = useDispatch();
  const tabs = useSelector((state) => state.tab);

  const activeTab = tabs[context];

  const setActiveData = (tab) => {
    if (context === "main") {
      dispatch(_setActiveTab(tab));
    } else {
      dispatch(_setActiveTab({ context, tab }));
    }
  };

  return { activeTab, setActiveData };
};
