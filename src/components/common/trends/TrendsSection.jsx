import { trendTopics } from "../../../constant";
import { NavLink } from "react-router-dom";
import TrendingItem from "../../UI/TrendingItem";

const TrendsSection = () => {
  return (
    <div className="w-full border border-neutral-500/50 bg-[color:var(--background-primary)] pt-4 rounded-2xl mt-4 overflow-hidden">
      <h1 className="pl-4 text-[color:var(--text-color)] mb-1.5 font-semibold text-lg">
        Trends for you
      </h1>
      {trendTopics.map((topic) => (
        <TrendingItem
          key={topic.id}
          title={topic.title}
          category={topic.category}
          posts={topic.posts}
        />
      ))}
      <NavLink className="text-[color:var(--color-primary)] block px-4 mt-2 text-sm py-2.5 hover:bg-[--hover] text-start">
        Show more
      </NavLink>
    </div>
  );
};

export default TrendsSection;
