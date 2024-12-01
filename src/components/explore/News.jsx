import { useTab } from "../../store/tabs/hooks";
import { newsTrends } from "../../constant";
import ExploreTabContent from "../UI/ExploreTabContent";

const News = () => {
  const { activeTab } = useTab("explore");
  return (
    <ExploreTabContent
      isActive={activeTab === "news"}
      isFeatured={false}
      data={newsTrends}
    />
  );
};

export default News;
