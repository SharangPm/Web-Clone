import { useTab } from "../../store/tabs/hooks";
import { trendsForYou } from "../../constant";
import trends from "../../assets/trends-1.jpg";
import ExploreTabContent from "../UI/ExploreTabContent";
const ForYou = () => {
  const { activeTab } = useTab("explore");
  return (
    <ExploreTabContent
      isActive={activeTab === "for-you"}
      isFeatured={true}
      img={trends}
      featuredTitle="Festival"
      featuredSubTitle="Music Festival &bull; LIVE"
      data={trendsForYou}
    />
  );
};

export default ForYou;
