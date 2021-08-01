import React, { useContext, useEffect, useState } from "react";
import { appContext } from "../context/appContext";
import NavBar from "./NavBar";
import PokemonItem from "./PokemonItem";

export default function PokemonsList() {
  const { pokemons, fetchPokemons } = useContext(appContext);
  useEffect(() => {
    fetchPokemons();
  }, []);
  if (pokemons) {
    return (
      <div>
        <NavBar />
        <div className="container">
          <h1>Pokemon List</h1>
          <div className="row">
            {pokemons.map((pokemon) => (
              <div key={pokemon.id} className="col s6">
                <PokemonItem pokemon={pokemon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <NavBar />
        <div className="container">
          <h1>Pokemon List</h1>
          <p>No pokemons yet</p>
        </div>
      </div>
    );
  }
}
