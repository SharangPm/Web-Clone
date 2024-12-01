import PropTypes from "prop-types";

const TabContent = ({ children }) => {


  return <div>{children}</div>;
};

TabContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TabContent;
