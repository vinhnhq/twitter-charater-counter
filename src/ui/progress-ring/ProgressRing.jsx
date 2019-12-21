import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./ProgressRing.module.scss";

export const calculateStyle = status => {
  let colorStyle = "";

  if (status === "warning") colorStyle = styles.warning;
  if (status === "danger") colorStyle = styles.danger;

  return colorStyle;
};

const ProgressRing = ({ progress, content, status }) => {
  const strokeDashoffset = [progress * 100, "100"];

  return (
    <div className={cx(styles.wrapper, calculateStyle(status))}>
      <svg
        viewBox="0 0 36 36"
        className={cx(styles.circularChart, calculateStyle(status))}
      >
        <path
          className={styles.circleBg}
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className={styles.circle}
          strokeDasharray={strokeDashoffset}
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="18" y="24" className={styles.content}>
          {content}
        </text>
      </svg>
    </div>
  );
};

ProgressRing.propTypes = {
  progress: PropTypes.number,
  content: PropTypes.number,
  status: PropTypes.oneOf(["", "warning", "danger"])
};

export default ProgressRing;
