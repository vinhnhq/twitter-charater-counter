import React from "react";
import PropTypes from "prop-types";

function Counter({ maxCount, count }) {
  const message = `You inserted ${count} characters on ${maxCount}`;

  const percentage = count / maxCount;
  const isWarning = percentage > 0.8 && percentage < 1;
  const isNotAllowed = percentage > 1;

  return (
    <div id="counter">
      <p>{message}</p>
      {isWarning && (
        <p>
          show warning with remaining allowed characters is {maxCount - count}
        </p>
      )}
      {isNotAllowed && (
        <p>show alert with over-typed characters is {count - maxCount}</p>
      )}
    </div>
  );
}

Counter.propTypes = {
  maxCount: PropTypes.number,
  count: PropTypes.number
};

export default Counter;
