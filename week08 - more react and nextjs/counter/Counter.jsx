import React, { useState, useEffect } from "react";
import styles from "./Counter.module.css";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [numClicks, setNumClicks] = useState(0);

  function handleMinusClick() {
    setCounter(counter - 1);
  }

  function handlePlusClick() {
    setCounter(counter + 1);
  }

  useEffect(() => {
    const handlePageClick = () => {
      setNumClicks(numClicks + 1);
    };

    document.addEventListener("click", handlePageClick);

    return () => {
      document.removeEventListener("click", handlePageClick);
    };
  }, [numClicks]);

  return (
    <div>
      <section>
        <div className={styles["counter-wrapper"]}>
          <button id="minus" onClick={handleMinusClick}>
            -
          </button>
          <span id="counter">{counter}</span>
          <button id="plus" onClick={handlePlusClick}>
            +
          </button>
        </div>
        <div className={styles["clicks-wrapper"]}>
          <p>
            Number of page clicks: <span id="clicks">{numClicks}</span>
          </p>
        </div>
      </section>
    </div>
  );
}
