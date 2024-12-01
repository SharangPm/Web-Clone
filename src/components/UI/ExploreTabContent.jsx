import PropTypes from "prop-types";
import TrendingItem from "./TrendingItem";

const ExploreTabContent = ({
  isActive,
  isFeatured,
  img,
  tabTitle,
  featuredTitle,
  featuredSubTitle,
  data,
}) => {
  return (
    isActive && (
      <section>
        {tabTitle && (
          <h1 className="text-[--text-color] text-xl font-semibold p-2">{tabTitle}</h1>
        )}
        {isFeatured && (
          <div className="relative">
            <img
              src={img}
              alt="Explore Page Tab Hero"
              className="relative w-full h-[200px] sm:h-[300px] lg:h-[400px] object-cover"
            />
            <div className="absolute bottom-4 left-5 text-xl text-white">
              <h1 className="font-semibold">{featuredTitle}</h1>
              <h1> {featuredSubTitle} </h1>
            </div>
          </div>
        )}
        <nav className="my-4">
          {data.map((topic) => (
            <TrendingItem
              key={topic.id}
              id={topic.id}
              title={topic.title}
              category={topic.category}
              posts={topic.posts}
            />
          ))}
        </nav>
      </section>
    )
  );
};

ExploreTabContent.propTypes = {
  isActive: PropTypes.bool.isRequired,
  isFeatured: PropTypes.bool,
  img: PropTypes.string,
  tabTitle: PropTypes.string,
  featuredTitle: PropTypes.string,
  featuredSubTitle: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      category: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      posts: PropTypes.number.isRequired,
    })
  ),
};

export default ExploreTabContent;
