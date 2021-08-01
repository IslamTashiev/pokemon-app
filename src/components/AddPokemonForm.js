import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { appContext } from "../context/appContext";
import NavBar from "./NavBar";

export default function AddPokemonForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");

  const { addPokemon } = useContext(appContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const pokemon = { name, description, img };
    history.push("/pokemons");

    addPokemon(pokemon);
  };
  const history = useHistory();
  return (
    <>
      <NavBar />
      <div className="container add__form">
        <h1>Add new pokemon</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="validate"
            placeholder="Name"
            required
          />

          <input
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            className="validate"
            placeholder="Description"
            required
          />
          <input
            onChange={(e) => setImg(e.target.value)}
            type="text"
            className="validate"
            placeholder="Img URL"
            required
          />

          <button className="btn blue darken-3">Add pokemon</button>
        </form>
      </div>
    </>
  );
}
