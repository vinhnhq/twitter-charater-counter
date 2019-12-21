import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./Button.module.scss";

const Button = ({ onClick, name, className }) => (
  <button className={cx(styles.root, className)} onClick={onClick}>
    {name}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
  className: PropTypes.string
};

export default React.memo(Button);
