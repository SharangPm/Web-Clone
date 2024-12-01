import PropTypes from "prop-types";
import {
  FaRegComment,
  FaRegHeart,
  FaChartBar,
  FaShareSquare,
  FaHeart,
} from "react-icons/fa";
import { FaRegBookmark, FaRetweet } from "react-icons/fa6";
import { numberFormat } from "../../utils/format";
import { useState } from "react";
import classNames from "classnames";

const IconWithCount = ({ icon: Icon, count, isLiked, handleLikeToggle }) => {
  const handleClick = () => {
    if (Icon === FaRegHeart) {
      handleLikeToggle();
    }
  };

  return (
    <div
      className="flex items-center gap-px group cursor-pointer"
      onClick={handleClick}
    >
      <div
        className={classNames(
          "w-8 h-8 rounded-full group-hover:text-[--color-primary] flex items-center justify-center group-hover:bg-[--color-primary-alpha] transition-colors duration-300",
          Icon === FaRegHeart
            ? "group-hover:text-pink-600 group-hover:bg-pink-600/35"
            : ""
        )}
      >
        {Icon === FaRegHeart ? (
          isLiked ? (
            <FaHeart className="text-pink-600" />
          ) : (
            <FaRegHeart />
          )
        ) : (
          <Icon />
        )}
      </div>
      <span
        className={classNames(
          "flex items-center justify-center group-hover:text-[--color-primary] transition-colors duration-300 w-full max-w-6",
          Icon === FaRegHeart ? " group-hover:text-pink-600" : "",
          isLiked ? "text-pink-600" : ""
        )}
      >
        {numberFormat(count)}
      </span>
    </div>
  );
};

IconWithCount.propTypes = {
  icon: PropTypes.elementType.isRequired,
  count: PropTypes.number.isRequired,
  isLiked: PropTypes.bool,
  handleLikeToggle: PropTypes.func,
};

const PostActions = ({ likes, retweets, comments, views }) => {
  const [liked, setLiked] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);
  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
    setLiked((prevLiked) => (isLiked ? prevLiked - 1 : prevLiked + 1));
  };
  return (
    <>
      <IconWithCount icon={FaRegComment} count={comments} />
      <IconWithCount icon={FaRetweet} count={retweets} />
      <IconWithCount
        icon={FaRegHeart}
        count={liked}
        isLiked={isLiked}
        handleLikeToggle={handleLikeToggle}
      />
      <IconWithCount icon={FaChartBar} count={views} />
      <div className="flex items-center text-sm gap-2 *:cursor-pointer">
        <span className="hidden sm:flex w-8 h-8 rounded-full hover:text-[--color-primary] items-center justify-center hover:bg-[--color-primary-alpha] transition-colors duration-500">
          <FaRegBookmark />
        </span>
        <span className="w-8 h-8 rounded-full hover:text-[--color-primary] flex items-center justify-center hover:bg-[--color-primary-alpha] transition-colors duration-500">
          <FaShareSquare />
        </span>
      </div>
    </>
  );
};

PostActions.propTypes = {
  likes: PropTypes.number.isRequired,
  retweets: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
};

export default PostActions;
