import React from "react";
import Routes from "./Routes";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import AppContextProvider from "./context/appContext";

function App() {
  return (
    <div>
      <AppContextProvider>
        <Routes />
      </AppContextProvider>
    </div>
  );
}

export default App;
