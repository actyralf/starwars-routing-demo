import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const apiPath = "https://swapi.py4e.com/api/people";

export default function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  console.log(characters[0]);

  useEffect(() => {
    async function loadCharacters() {
      try {
        const { data } = await axios.get(apiPath);
        setCharacters(data.results);
      } catch (err) {
        console.log("something went wrong");
      }
    }
    loadCharacters();
  }, []);

  return (
    <>
      <h1>Characters Page</h1>
      <ul>
        {characters.map((character) => {
          // This extracts the id from a url in the format: https://swapi.py4e.com/api/people/1/
          const urlParts = character.url.split("/");
          const id = urlParts[urlParts.length - 2];
          // end extraction
          return (
            <li key={character.url}>
              <Link to={`/characters/${id}`}>{character.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
