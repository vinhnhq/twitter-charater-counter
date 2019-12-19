import React from "react";
import PropTypes from "prop-types";
import ProgressRing from "../../../../ui/progress-ring";

function Counter({ maxCount, count }) {
  const percentage = count / maxCount;

  let status = "";
  let content;
  if (percentage > 0.8 && percentage < 1) {
    status = "warning";
    content = maxCount - count;
  }
  if (percentage > 1) {
    status = "danger";
    content = count - maxCount;
  }

  return (
    <div id="counter">
      <ProgressRing content={content} progress={percentage} status={status} />
    </div>
  );
}

Counter.propTypes = {
  maxCount: PropTypes.number,
  count: PropTypes.number
};

export default Counter;
