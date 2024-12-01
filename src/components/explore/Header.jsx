import HeaderWrapper from "../../helpers/HeaderWrapper";
import { useTab } from "../../store/tabs/hooks";
import TabItem from "../tabs/TabItem";

const Header = () => {
  const { activeTab, setActiveData } = useTab("explore");
  return (
    <HeaderWrapper>
      <TabItem
        isActive={activeTab === "for-you"}
        onClick={() => setActiveData("for-you")}
      >
        For You
      </TabItem>
      <TabItem
        isActive={activeTab === "trending"}
        onClick={() => setActiveData("trending")}
      >
        Trending
      </TabItem>
      <TabItem
        isActive={activeTab === "news"}
        onClick={() => setActiveData("news")}
      >
        News
      </TabItem>
      <TabItem
        isActive={activeTab === "sports"}
        onClick={() => setActiveData("sports")}
      >
        Sports
      </TabItem>
      <TabItem
        isActive={activeTab === "entertainment"}
        onClick={() => setActiveData("entertainment")}
      >
        Entertainment
      </TabItem>
    </HeaderWrapper>
  );
};

export default Header;
