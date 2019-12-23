import React from "react";
import { Editor, EditorState, CompositeDecorator } from "draft-js";
import Counter from "./components/counter";
import Button from "../../ui/button";

import "draft-js/dist/Draft.css";
import styles from "./TwitterInput.module.scss";

const MAX_COUNT = 50;

function TwitterInput() {
  const editorRef = React.useRef(null);

  const compositeDecorator = new CompositeDecorator([
    {
      strategy: overTypedStrategy,
      component: OverTypedSpan
    }
  ]);

  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty(compositeDecorator)
  );
  const [state, setState] = React.useState({ count: 0, value: "" });

  const onEditorChangeHandler = currentEditorState => {
    const rawValue = currentEditorState.getCurrentContent().getPlainText();

    setEditorState(currentEditorState);
    setState({ count: rawValue.length, value: rawValue });
  };

  const tweetBtnClickHandler = React.useCallback(() => alert(state.value), [
    state.value
  ]);

  React.useEffect(() => editorRef.current.focus(), []);

  function overTypedStrategy(contentBlock, callback, contentState) {
    const length = contentBlock.getText().length;

    if (length >= MAX_COUNT) {
      callback(MAX_COUNT, length);
    }
  }

  function OverTypedSpan(props) {
    return (
      <span className={styles.overTyped} data-offset-key={props.offsetKey}>
        {props.children}
      </span>
    );
  }

  return (
    <div className={styles.root}>
      <Editor
        ref={editorRef}
        editorState={editorState}
        onChange={onEditorChangeHandler}
        placeholder="What's happening?"
      />

      <div className={styles.handler}>
        <Counter maxCount={MAX_COUNT} count={state.count} />
        <Button
          className={styles.button}
          onClick={tweetBtnClickHandler}
          name="Tweet"
        />
      </div>
    </div>
  );
}

export default TwitterInput;
