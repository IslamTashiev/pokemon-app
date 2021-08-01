import React, { useContext, useState } from "react";
import { appContext } from "../context/appContext";
import favorite from "../assets/icons/heart.svg";
import active_favorite from "../assets/icons/active_heart.svg";
import Truncate from "react-truncate";
import { useHistory } from "react-router-dom";

export default function PokemonItem({ pokemon }) {
  const [like, setLike] = useState(false);
  const { deletePokemon, setFavorite } = useContext(appContext);

  const { name, description, img, id } = pokemon;
  const history = useHistory();
  const addFavorite = () => {
    setFavorite({ name, description, img, id });
    setLike(!like);
    history.push("/favorite");
  };
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
                onClick={() => deletePokemon(pokemon.id)}
                className="material-icons cursorer"
              >
                delete
              </i>
              <img
                style={{ width: 20 }}
                className="cursorer"
                onClick={addFavorite}
                src={like ? active_favorite : favorite}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
