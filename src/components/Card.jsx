import React from "react";
import movie from "../assests/images/movie.png";
import imbm from "../assests/icon/imbm.svg";
import berry from "../assests/icon/berry.svg";
import { image_url } from "../helper/dotenv";

export const Card = ({ list, genre }) => {
  const allGenre = genre
    .map((item) => {
      if (list.genre_ids.includes(item.id)) {
        return item.name;
      }
    })
    .filter((a) => a);
  return (
    <div className="card">
      <div>
        <img src={image_url + list.poster_path} />
        <p>USA, 2016 - Current</p>
        <h3>{list.title}</h3>
      </div>
      <div className="ft_rate">
        <img src={imbm} />
        <p>{Number(list.vote_average * 10).toFixed(1)} / 100</p>
        <img src={berry} />
        <p>97%</p>
      </div>
      <p>{allGenre.join(",")}</p>
    </div>
  );
};
