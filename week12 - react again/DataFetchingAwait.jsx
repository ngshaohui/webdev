import { useState } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [word, setWord] = useState("");
  const [definitions, setDefinitions] = useState([]);

  // TODO check error propogation from events and async pattern
  async function search(event) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const resp = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const data = await resp.json();

      if (Array.isArray(data)) {
        setDefinitions(data[0].meanings);
      } else {
        setDefinitions([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setDefinitions([]);
    } finally {
      setIsLoading(false);
    }
  }

  function showDefinitions(meanings) {
    if (meanings.length === 0) {
      return <div>No definitions found</div>;
    }

    return meanings.map((meaning, index) => (
      <div key={index}>
        <h3>{meaning.partOfSpeech}</h3>
        <ol>
          {meaning.definitions.map((definition, idx) => (
            <li>{definition.definition}</li>
          ))}
        </ol>
      </div>
    ));
  }

  function setInput(event) {
    setWord(event.target.value);
  }

  return (
    <div>
      <form onSubmit={search} id="form">
        <input
          type="text"
          autoFocus
          placeholder="Enter a word"
          value={word}
          onChange={setInput}
        />
        <button type="submit">Get definition</button>
      </form>
      <br />
      {isLoading ? <div>Searching...</div> : showDefinitions(definitions)}
    </div>
  );
}
