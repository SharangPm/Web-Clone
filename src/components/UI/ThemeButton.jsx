import classNames from "classnames";
import PropTypes from "prop-types";
import { IoMdCheckmark } from "react-icons/io";

const ThemeButton = ({ label, backgroundColor, active, onClick }) => {
  return (
    <button
      className={classNames(
        "border-[2px] border-transparent rounded h-[62px] px-[20px] group flex font-semibold items-center gap-1.5",
        {
          "!border-[color:var(--color-primary)]": active,
        },
        {
          "text-white bg-black": backgroundColor.name === "dark",
          "text-white bg-[#15202b]": backgroundColor.name === "dim",
          "text-[#0f1419] bg-white": backgroundColor.name === "light",
        }
      )}
      onClick={onClick}
    >
      <div className="w-[40px] h-[40px] rounded-full group-hover:bg-white/10 transition-colors flex items-center justify-center flex-shrink-0">
        <div
          className={`w-[20px] h-[20px] rounded-full flex items-center justify-center ${
            active ? "bg-[var(--color-primary)]" : "border-[2px] border-neutral-300"
          } text-white`}
        >
          {active && <IoMdCheckmark />}
        </div>
      </div>
      {label}
    </button>
  );
};

ThemeButton.propTypes = {
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ThemeButton;
