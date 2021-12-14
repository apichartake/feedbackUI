import PropTypes from "prop-types";

const Button = ({ children, version, type, isDisable }) => {
  return (
    <button type={type} disabled={isDisable} className={`btn btn-${version}`}>
      {children}
    </button>
  );
};
Button.defaultProps = {
  type: "text",
  version: "primary",
  isDisable: false,
};

Button.propTypes = {
  version: PropTypes.string,
  type: PropTypes.string,
  isDisable: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;
