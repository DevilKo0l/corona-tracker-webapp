import React from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>
          <Cards />
          <CountryPicker />
          <Chart />
        </h1>
      </div>
    );
  }
}

export default App;