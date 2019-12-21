import React from "react";
import TwitterInput from "../twitter-input";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.root}>
      <TwitterInput />
    </div>
  );
}

export default App;
