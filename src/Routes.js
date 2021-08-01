import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddPokemonForm from "./components/AddPokemonForm";
import FavPage from "./components/FavPage";
import PokemonsList from "./components/PokemonsList";
import MainLayout from "./Layouts/MainLayout";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainLayout} exact />
        <Route path="/pokemons" component={PokemonsList} exact />
        <Route path="/add" component={AddPokemonForm} exact />
        <Route path="/favorite" component={FavPage} exact />
      </Switch>
    </Router>
  );
}
