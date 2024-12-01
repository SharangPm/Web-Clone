import { NavLink } from "react-router-dom";
import SuggestedFollow from "./SuggestedFollow";
import { whoToFollow } from "../../../constant";

const WhoToFollow = () => {
  return (
    <div className="w-full border border-neutral-500/50 pt-4 bg-[color:var(--background-primary)] rounded-2xl mt-4 overflow-hidden">
      <h1 className="pl-4 text-[color:var(--text-color)] mb-1.5 font-semibold text-lg">
        Who To Follow
      </h1>
      {whoToFollow.map((user) => (
        <SuggestedFollow key={user.id} user={user} />
      ))}
      <NavLink className="text-[color:var(--color-primary)] block px-4 mt-2 text-sm py-2.5 hover:bg-[--hover] text-start">
        Show more
      </NavLink>
    </div>
  );
};

export default WhoToFollow;
