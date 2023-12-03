"use client";

import React, { useState } from "react";
import styles from "./page.module.css";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function handleMinusClick() {
    setCounter(counter - 1);
  }

  function handlePlusClick() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <section>
        <div className={styles.counterWrapper}>
          <button
            className={styles.button}
            id="minus"
            onClick={handleMinusClick}
          >
            -
          </button>
          <span id="counter">{counter}</span>
          <button className={styles.button} id="plus" onClick={handlePlusClick}>
            +
          </button>
        </div>
      </section>
    </div>
  );
}
