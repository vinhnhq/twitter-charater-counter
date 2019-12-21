import React from "react";
import PropTypes from "prop-types";
import { Editor, EditorState, convertToRaw } from "draft-js";
import "draft-js/dist/Draft.css";

function TextArea({ onChange }) {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  const onChangeHandler = state => {
    const contentState = state.getCurrentContent();
    const blocks = convertToRaw(contentState).blocks;
    const rawValue = blocks
      .map(block => (!block.text.trim() && "\n") || block.text)
      .join("\n");

    setEditorState(state);
    onChange({
      count: rawValue.length,
      value: rawValue
    });
  };

  return (
    <Editor
      editorState={editorState}
      onChange={onChangeHandler}
      placeholder="What's happening?"
    />
  );
}

TextArea.propTypes = {
  onChange: PropTypes.func
};

export default React.memo(TextArea);
