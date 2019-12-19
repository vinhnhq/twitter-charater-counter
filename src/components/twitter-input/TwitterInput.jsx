import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import TextArea from "./components/text-area";
import Counter from "./components/counter";

const MAX_COUNT = 50;
const DEBOUNCE_TIME = 50;

const debounceOptions = { maxWait: 1000 };

function TwitterInput() {
  const [state, setState] = useState({
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
    <div id="twitterInput">
      <TextArea onChange={setStatetWithDebounced} />
      <Counter maxCount={MAX_COUNT} count={state.count} />
      <button onClick={tweetHandler}>Tweet</button>
    </div>
  );
}

TwitterInput.propTypes = {};

export default TwitterInput;
