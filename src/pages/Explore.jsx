import Entertainment from "../components/explore/Entertainment";
import ForYou from "../components/explore/ForYou";
import Header from "../components/explore/Header";
import News from "../components/explore/News";
import Sports from "../components/explore/Sports";
import Trending from "../components/explore/Trending";

const Explore = () => {
  return (
    <section className="header-layout">
      <Header />
      <ForYou />
      <Trending />
      <News />
      <Sports />
      <Entertainment />
    </section>
  );
};

export default Explore;
