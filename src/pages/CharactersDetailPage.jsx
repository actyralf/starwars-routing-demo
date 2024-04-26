import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const apiPath = "https://swapi.py4e.com/api/people";

export default function CharactersDetailPage() {
  const [character, setCharacter] = useState(null);
  const { characterId } = useParams();
  useEffect(() => {
    async function loadCharacter() {
      try {
        const { data } = await axios.get(`${apiPath}/${characterId}`);
        setCharacter(data);
      } catch (err) {
        console.log("something went wrong");
      }
    }
    loadCharacter();
  }, [characterId]);
  return (
    <>
      <h1>Characters Detail Page</h1>
      <h2>Details for Character: {characterId}</h2>
      {character && (
        <p>
          {character.name} has {character.hair_color} hair
        </p>
      )}
    </>
  );
}
