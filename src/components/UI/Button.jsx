import PropTypes from "prop-types";
import classNames from "classnames";
import { useSelector } from "react-redux";

const Button = ({ size, variant, children, className, ...props }) => {
  const theme = useSelector((state) => state.appearance);

  const buttonClass = classNames(
    {
      "px-4 h-8 text-sm": size === "small",
      "px-4 h-9 text-sm": size === "normal",
      "p-4 h-14 w-14 xl:w-full mx-auto text-lg": size === "large",
      "bg-[color:var(--color-primary)] text-white": variant === "primary",

      "bg-white text-black hover:bg-gray-200":
        variant === "basic" && theme.backgroundColor.name !== "light",

      "bg-black text-white hover:bg-gray-800":
        variant === "basic" && theme.backgroundColor.name === "light",

      "bg-transparent border border-gray-200 text-[color:var(--text-color)]":
        variant === "follow-outline",
      "flex items-center justify-center rounded-full font-semibold transition-colors": true,
    },
    className
  );

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(["small", "normal", "large"]),
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "white"]),
  className: PropTypes.string,
};

Button.defaultProps = {
  size: "normal",
  variant: "primary",
  className: "",
};

export default Button;
