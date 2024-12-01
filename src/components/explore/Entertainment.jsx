import { useTab } from "../../store/tabs/hooks";
import { entertainmentTrends } from "../../constant";
import trends from "../../assets/trends-1.jpg";
import ExploreTabContent from "../UI/ExploreTabContent";

const Entertainment = () => {
  const { activeTab } = useTab("explore");

  return (
    <ExploreTabContent
      isActive={activeTab === "entertainment"}
      isFeatured={true}
      img={trends}
      featuredTitle="Festival"
      featuredSubTitle="Music Festival &bull; LIVE"
      data={entertainmentTrends}
    />
  );
};

export default Entertainment;
