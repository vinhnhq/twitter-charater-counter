import React from "react";
import PropTypes from "prop-types";

function TextArea({ onChange }) {
  const onChangeHandler = event =>
    onChange({
      count: event.target.value.length,
      value: event.target.value
    });

  return (
    <div id="textArea">
      <textarea
        rows="15"
        cols="150"
        placeholder="What's happening?"
        onChange={onChangeHandler}
      ></textarea>
    </div>
  );
}

TextArea.propTypes = {
  onChange: PropTypes.func
};

export default TextArea;
