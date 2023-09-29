import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokemon";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  console.log("Pokemons ---> ", pokemons);
  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi();
      const pokemonsArray = [];
      for await (const pokemon of response.results) {
        console.log(pokemon.url);
      }

      setPokemons(pokemonsArray);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <Text> Pokedex </Text>
    </SafeAreaView>
  );
}
