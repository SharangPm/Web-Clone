import classNames from "classnames";
import PropTypes from "prop-types";

const TabItem = ({ children, isActive, onClick }) => {
  return (
    <button
      className="flex-auto font-semibold text-center hover:bg-[--hover]"
      type="button"
      onClick={onClick}
    >
      <div className="h-[3.3rem] relative inline-flex items-center">
        <span
          className={classNames(
            "text-[--text-color]",
            isActive ? "" : "opacity-50"
          )}
        >
          {children}
        </span>
        <div
          className={classNames(
            "h-[4px] absolute bottom-[1px] left-0 w-full rounded-full",
            isActive ? "bg-[--color-primary]" : ""
          )}
        />
      </div>
    </button>
  );
};

TabItem.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TabItem;
