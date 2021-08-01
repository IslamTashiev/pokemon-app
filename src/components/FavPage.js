import React, { useContext, useEffect } from "react";
import { appContext } from "../context/appContext";
import NavBar from "./NavBar";
import PokemonFavItem from "./PokemonFavItem";

export default function FavPage() {
  const { favorites, fetchFavorites } = useContext(appContext);
  useEffect(() => {
    fetchFavorites();
  }, []);
  if (favorites) {
    return (
      <div>
        <NavBar />
        <div className="container">
          <h1>My favorites</h1>
          <div className="row">
            {favorites.map((fav) => (
              <div key={fav.id} className="col s6">
                <PokemonFavItem pokemon={fav} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}
