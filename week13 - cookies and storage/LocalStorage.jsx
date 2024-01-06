import React, { useState, useEffect } from "react";

const DEFAULT_SETTINGS = { darkMode: false };
const DEFAULT_SETTINGS_KEY = "settings";

export default function App() {
  const [darkMode, setDarkMode] = useState(DEFAULT_SETTINGS.darkMode);

  useEffect(() => {
    const savedSettingsStr = localStorage.getItem(DEFAULT_SETTINGS_KEY);

    if (savedSettingsStr === null) {
      localStorage.setItem(
        DEFAULT_SETTINGS_KEY,
        JSON.stringify(DEFAULT_SETTINGS)
      );
    } else {
      const savedSettings = JSON.parse(savedSettingsStr);
      setDarkMode(savedSettings.darkMode);
    }
  }, []); // Empty dependency array, runs once on mount

  function toggleDarkMode() {
    setDarkMode((darkModeState) => {
      const newState = !darkModeState;
      saveSettings({ darkMode: newState });
    });
  }

  function saveSettings(settings) {
    localStorage.setItem(DEFAULT_SETTINGS_KEY, JSON.stringify(settings));
  }

  return (
    <div className={`container ${darkMode ? "dark-mode" : ""}`}>
      <h1>"The Road Not Taken" by Robert Frost</h1>
      <section>
        <p>Two roads diverged in a yellow wood,</p>
        <p>And sorry I could not travel both</p>
        <p>And be one traveler, long I stood</p>
        <p>And looked down one as far as I could</p>
        <p>To where it bent in the undergrowth;</p>
        <br />
        <p>Then took the other, as just as fair,</p>
        <p>And having perhaps the better claim,</p>
        <p>Because it was grassy and wanted wear;</p>
        <p>Though as for that the passing there</p>
        <p>Had worn them really about the same,</p>
        <br />

        <p>And both that morning equally lay</p>
        <p>In leaves no step had trodden black.</p>
        <p>Oh, I kept the first for another day!</p>
        <p>Yet knowing how way leads on to way,</p>
        <p>I doubted if I should ever come back.</p>
        <br />

        <p>I shall be telling this with a sigh</p>
        <p>Somewhere ages and ages hence:</p>
        <p>Two roads diverged in a wood, and I—</p>
        <p>I took the one less traveled by,</p>
        <p>And that has made all the difference.</p>
      </section>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
}
