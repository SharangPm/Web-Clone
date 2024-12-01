import { useTab } from "../../store/tabs/hooks";
import TabItem from "../tabs/TabItem";
import HeaderWrapper from "../../helpers/HeaderWrapper";

const Header = () => {
  const { activeTab, setActiveData } = useTab("notifications");

  return (
    <HeaderWrapper title="Notifications">
      <TabItem
        isActive={activeTab === "all"}
        onClick={() => setActiveData("all")}
      >
        All
      </TabItem>
      <TabItem
        isActive={activeTab === "verified"}
        onClick={() => setActiveData("verified")}
      >
        Verified
      </TabItem>
      <TabItem
        isActive={activeTab === "mentions"}
        onClick={() => setActiveData("mentions")}
      >
        Mentions
      </TabItem>
    </HeaderWrapper>
  );
};

export default Header;
