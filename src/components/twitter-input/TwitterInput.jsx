import React from "react";
import { useDebouncedCallback } from "use-debounce";
import TextArea from "./components/text-area";
import Counter from "./components/counter";
import styles from "./TwitterInput.module.scss";
import Button from "../../ui/button";

const MAX_COUNT = 50;
const DEBOUNCE_TIME = 0;

const debounceOptions = { maxWait: 1000 };

function TwitterInput() {
  const [state, setState] = React.useState({
    count: 0,
    value: ""
  });

  const [setStatetWithDebounced] = useDebouncedCallback(
    ({ count, value }) => setState({ count, value }),
    DEBOUNCE_TIME,
    debounceOptions
  );

  const tweetHandler = () => alert(state.value);

  return (
    <div className={styles.root}>
      <TextArea onChange={setStatetWithDebounced} />
      <div className={styles.handler}>
        <Counter maxCount={MAX_COUNT} count={state.count} />
        <Button className={styles.button} onClick={tweetHandler} name="Tweet" />
      </div>
    </div>
  );
}

TwitterInput.propTypes = {};

export default TwitterInput;
