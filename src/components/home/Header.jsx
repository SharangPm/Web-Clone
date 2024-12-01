import { useTab } from "../../store/tabs/hooks";
import TabItem from "../tabs/TabItem";
import HeaderWrapper from "../../helpers/HeaderWrapper";

const Header = () => {
  const { activeTab, setActiveData } = useTab();

  return (
    <HeaderWrapper>
        <TabItem
          isActive={activeTab === "for-you"}
          onClick={() => setActiveData("for-you")}
        >
          For You
        </TabItem>
        <TabItem
          isActive={activeTab === "following"}
          onClick={() => setActiveData("following")}
        >
          Following
        </TabItem>
    </HeaderWrapper>
  );
};

export default Header;
