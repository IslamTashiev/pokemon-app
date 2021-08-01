import axios from "axios";
import { createContext, useReducer } from "react";

const INIT_STATE = {
  pokemons: [],
  favorites: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "SET_POKEMONS":
      return {
        ...state,
        pokemons: action.payload,
      };
    case "ADD_POKEMON":
      return {
        pokemons: [...state.pokemons, action.payload],
      };
    case "REMOVE_POKEMON":
      return {
        ...state,
        pokemons: state.pokemons.filter(
          (pokemon) => pokemon.id !== action.payload
        ),
      };
    case "FETCH_FAVORITES":
      return {
        ...state,
        favorites: action.payload,
      };
    case "SET_FAVORITE":
      return {
        favorites: [...state.favorites, action.payload],
      };
    case "REMOVE_FAV":
      return {
        ...state,
        favorites: state.favorites.filter((fav) => fav.id !== action.payload),
      };

    default:
      break;
  }
};

export const appContext = createContext();
const URL = "http://localhost:8000";

export default function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const fetchPokemons = async () => {
    const { data } = await axios.get(`${URL}/pokemons`);

    console.log(data);
    dispatch({
      type: "SET_POKEMONS",
      payload: data,
    });
  };

  const addPokemon = async (data) => {
    const response = await axios.post(`${URL}/pokemons`, data);
    const newData = response.data;

    dispatch({
      type: "ADD_POKEMON",
      payload: newData,
    });
  };

  const deletePokemon = async (id) => {
    await axios.delete(`${URL}/pokemons/${id}`);
    dispatch({
      type: "REMOVE_POKEMON",
      payload: id,
    });
  };

  const fetchFavorites = async () => {
    const { data } = await axios.get(`${URL}/favorite`);
    dispatch({
      type: "FETCH_FAVORITES",
      payload: data,
    });
  };

  const setFavorite = async (data) => {
    const response = await axios.post(`${URL}/favorite`, data);
    const newData = response.data;
    dispatch({
      type: "SET_FAVORITE",
      payload: newData,
    });
    console.log(newData);
  };

  const removeFavorite = async (id) => {
    await axios.delete(`${URL}/favorite/${id}`);
    dispatch({
      type: "REMOVE_FAV",
      payload: id,
    });
  };

  return (
    <appContext.Provider
      value={{
        pokemons: state.pokemons,
        favorites: state.favorites,
        fetchPokemons,
        addPokemon,
        deletePokemon,
        fetchFavorites,
        setFavorite,
        removeFavorite,
      }}
    >
      {children}
    </appContext.Provider>
  );
}
