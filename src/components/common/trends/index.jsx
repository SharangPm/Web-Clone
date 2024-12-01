import SearchBar from "../../UI/SearchBar";
import Footer from "./Footer";
import Subscribe from "./Subscribe";
import TrendsSection from "./TrendsSection";
import WhoToFollow from "./WhoToFollow";

const TrendsBar = () => {
  return (
    <aside className="w-[350px] mx-4 hidden lg:flex flex-col gap-1">
      <SearchBar
        inputPlaceholder="Search"
        popoverContent="Search for people, lists or keywords"
      />
      <Subscribe />
      <TrendsSection />
      <WhoToFollow />
      <Footer />
    </aside>
  );
};

export default TrendsBar;
