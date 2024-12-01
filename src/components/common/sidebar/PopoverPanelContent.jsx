import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const PopoverPanelContent = ({ icon: Icon, text, path }) => {
  const navigate = useNavigate();

  return (
    <button
      className="flex w-full hover:bg-[--hover] items-center pl-3 gap-5 justify-start h-14"
      onClick={() => path && navigate(path)}
    >
      <Icon className="text-2xl" />
      <span className="text-lg font-semibold">{text}</span>
    </button>
  );
};

PopoverPanelContent.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  path: PropTypes.string   
};

export default PopoverPanelContent;
