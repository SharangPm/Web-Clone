import PropTypes from "prop-types";

const HeaderWrapper = ({ children, title, className }) => {
  return (
    <header className={`sticky z-50 top-0 backdrop-blur-lg ${className}`}>
      {title && (
        <h1 className="p-3 cursor-pointer text-xl text-[--text-color] font-medium">
          {title}
        </h1>
      )}
      <div className="flex border-b border-neutral-500/50">{children}</div>
    </header>
  );
};

HeaderWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
};

export default HeaderWrapper;
