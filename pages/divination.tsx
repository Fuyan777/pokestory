import { useState } from "react";
import Layout from '../components/Layout'

const pokemonImages: string[] = [
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/887.png",
];

const randomPokemonImage = (): string => {
  const index = Math.floor(Math.random() * pokemonImages.length)
  return pokemonImages[index];
};

const fetchPokemon = async () => {
  const index = Math.floor(Math.random() * 905 + 1);
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + index);
  const result = await res.json();
  return result;
};

fetchPokemon().then((pokemon) => {
  console.log(`図鑑番号: ${pokemon['id']}`);
  console.log(`名前: ${pokemon['name']}`);
  console.log(`画像URL: ${pokemon['sprites']['front_default']}`);
})

const divisionPage = () => {
  const [pokemonID, setPokemonID] = useState(
    887
  );

  const [pokemonName, setPokemonName] = useState(
    "dragapult"
  );

  const [pokemonImageURL, setPokemonImageURL] = useState(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/887.png"
  );

  const handleClick = async () => {
    const pokemon = await fetchPokemon();
    setPokemonID(pokemon['id']);
    setPokemonName(pokemon['name']);
    setPokemonImageURL(pokemon['sprites']['front_default']);
  };

  return (
    <Layout title="farm">
      <div>
        <h3>今日のポケモン占い</h3>
        <button onClick={handleClick}>君に決めた</button>
        <div>
            <img src={pokemonImageURL}/>
            <p>{pokemonID} {pokemonName}</p>
        </div>
      </div>
    </Layout>
  );
};

export default divisionPage