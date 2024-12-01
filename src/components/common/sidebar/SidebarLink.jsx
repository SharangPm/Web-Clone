import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import MorePopover from "./MorePopover";
import { useAppearance } from "../../../store/appearance/hooks";

const SidebarLink = ({ text, icon: Icon, notification, path, id }) => {
  const { fontSize } = useAppearance();

  const shouldHide =
    (fontSize >= 15 && id === 6) || (fontSize >= 17 && (id === 7 || id === 8));

  if (text === "More") {
    return (
      <li className="w-full">
        <MorePopover icon={Icon} />
      </li>
    );
  }
  return (
    <li className={`w-full ${shouldHide ? "hidden" : ""}`}>
      <NavLink className="block group" {...(path ? { to: path } : {})}>
        <div className="inline-flex  items-center gap-4 group-hover:bg-[--hover] rounded-full p-2.5 transition-colors relative">
          <div className="relative">
            {notification && (
              <div className="absolute w-[18px] h-[18px] -right-1 -top-1.5 bg-[color:var(--color-primary)] text-white flex items-center justify-center text-xs rounded-full">
                {notification}
              </div>
            )}
            <Icon className="text-2xl" />
          </div>
          <span className="text-[1.2rem] hidden xl:block">{text}</span>
        </div>
      </NavLink>
    </li>
  );
};

SidebarLink.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  notification: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.number.isRequired,
  path: PropTypes.string,
};

export default SidebarLink;
