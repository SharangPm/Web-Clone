import { useTab } from "../../store/tabs/hooks";
import { globalSportsTrends } from "../../constant";
import sports from "../../assets/sports-1.jpg";
import ExploreTabContent from "../UI/ExploreTabContent";

const ForYou = () => {
  const { activeTab } = useTab("explore");

  return (
    <ExploreTabContent
      isActive={activeTab === "sports"}
      isFeatured={true}
      img={sports}
      featuredTitle="Badminton World Championship 2024"
      featuredSubTitle="August 15 &bull; 2024"
      data={globalSportsTrends}
    />
  );
};

export default ForYou;
