import { RiVerifiedBadgeFill } from "react-icons/ri";
import Button from "../../UI/Button";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const SuggestedFollow = ({ user }) => {
  const [follow, setFollow] = useState(() => {
    const saved = localStorage.getItem(`follow_${user.id}`);
    return saved === "true";
  });

  useEffect(() => {
    localStorage.setItem(`follow_${user.id}`, follow);
  }, [follow, user.id]);

  const handleFollowToggle = () => {
    setFollow(!follow);
  };

  return (
    <>
      <button className="flex w-full items-center gap-3 px-4 my-4">
        <NavLink className="flex items-center gap-2 flex-1">
          <img src={user.avatar} alt="" className="rounded-full w-9 h-9" />
          <div className="text-sm flex flex-col items-start">
            <span className="leading-5 text-[color:var(--text-color)] hover:underline flex items-center">
              {user.fullName}
              {user?.verified && (
                <RiVerifiedBadgeFill className="text-blue-500 text-lg ml-0.5" />
              )}
            </span>
            <span className="text-[color:var(--text-color-secondary)]">
              {user.username}
            </span>
          </div>
        </NavLink>
        {follow ? (
          <Button
            size="small"
            variant="follow-outline"
            onClick={handleFollowToggle}
            className="hover:border-red-700 hover:text-red-700 hover:bg-red-700/15 group"
          >
            <span className="block group-hover:hidden">Following</span>
            <span className="hidden group-hover:block">Unfollow</span>
          </Button>
        ) : (
          <Button size="small" variant="basic" onClick={handleFollowToggle}>
            Follow
          </Button>
        )}
      </button>
    </>
  );
};

SuggestedFollow.propTypes = {
  user: PropTypes.object,
};

export default SuggestedFollow;
