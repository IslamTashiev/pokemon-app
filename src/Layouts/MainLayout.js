import React from "react";
import HomePage from "../components/HomePage";
import NavBar from "../components/NavBar";

export default function MainLayout() {
  return (
    <div>
      <NavBar />
      <HomePage />
    </div>
  );
}
