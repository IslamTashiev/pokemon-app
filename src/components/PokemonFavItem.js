import React, { useContext, useState } from "react";
import { appContext } from "../context/appContext";
import Truncate from "react-truncate";

export default function PokemonFavItem({ pokemon }) {
  const { removeFavorite } = useContext(appContext);

  const { name, description, img, id } = pokemon;

  return (
    <div>
      <div>
        <div className="card__img">
          <img src={img} />
          <div className="card__desc">
            <div>
              <span className="card__name">{name}</span>
              <p>
                <Truncate lines={2} ellipsis={"..."}>
                  {description}
                </Truncate>
              </p>
            </div>
            <div>
              <i
                onClick={() => removeFavorite(id)}
                className="material-icons cursorer"
              >
                delete
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
