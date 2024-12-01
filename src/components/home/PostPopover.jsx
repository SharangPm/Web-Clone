import PropTypes from "prop-types";
import { postPopoverItems } from "../../constant";

const PostPopover = ({ username }) => {
  const items = postPopoverItems(username);

  return (
    <>
      {items.map((item) => (
        <button
          key={item.id}
          className="w-full hover:bg-[--hover] py-3 px-1.5 gap-2 text-[--text-color] font-medium flex items-center"
        >
          <item.icon />
          {item.text}
        </button>
      ))}
    </>
  );
};

PostPopover.propTypes = {
  username: PropTypes.string.isRequired,
};

export default PostPopover;
