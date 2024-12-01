import PropTypes from "prop-types";
import { numberFormat } from "../../utils/format";
import { Popover, PopoverPanel, PopoverButton } from "@headlessui/react";
import { PiDotsThreeCircle, PiSmileySadThin } from "react-icons/pi";

const TrendingItem = ({ title, category, posts, id }) => {
  return (
    <>
      <button className="w-full flex items-start justify-between px-4 py-2 hover:bg-[--hover] transition-colors">
        <div className="flex flex-col items-start">
          <div className="text-xs text-[color:var(--text-color-secondary)] flex items-center gap-1">
            {id && <span>{id} ·</span>}
            <span className="">{category}</span>
          </div>
          <span className="text-sm font-semibold text-[color:var(--text-color)]">
            #{title}
          </span>
          <span className="text-xs text-[color:var(--text-color-secondary)]">
            {numberFormat(posts)} posts
          </span>
        </div>
        <Popover className="relative text-[color:var(--text-color)]">
          <PopoverButton className="focus:outline-none">
            <PiDotsThreeCircle className="text-xl hover:text-[color:var(--color-primary)] transition-colors" />
          </PopoverButton>
          <PopoverPanel className="absolute bg-[color:var(--background-primary)] top-0 z-40 right-0 min-w-[300px] shadow-box rounded-xl ">
            <button className="w-full flex items-center px-2.5 py-2">
              <PiSmileySadThin className="text-2xl mr-2.5" />
              <p className="text-[15px]">Not interested in this</p>
            </button>
            <button className="w-full flex items-center px-2.5 py-2">
              <PiSmileySadThin className="text-2xl mr-2.5" />
              <p className="text-[15px]">This trend is harmful or spammy</p>
            </button>
          </PopoverPanel>
        </Popover>
      </button>
    </>
  );
};

TrendingItem.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  posts: PropTypes.number.isRequired,
  id: PropTypes.number,
};

export default TrendingItem;
