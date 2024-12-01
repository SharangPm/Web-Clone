import { exploreTrending } from "../../constant";
import { useTab } from "../../store/tabs/hooks";
import ExploreTabContent from "../UI/ExploreTabContent";

const Trending = () => {
  const { activeTab } = useTab("explore");
  return (
    <div>
      <ExploreTabContent
        isActive={activeTab === "trending"}
        tabTitle="Turkey Trends"
        data={exploreTrending}
      />
    </div>
  );
};

export default Trending;
