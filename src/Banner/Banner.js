import React, { useEffect, useState } from "react";
import styles from "./Banner.module.css";
import requests from "../Request.js";
import axios from "../axios";
import StarRatings from "react-star-ratings";
const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTopRated);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);
  const truncate = (string, n) =>
    string?.length > n ? string.substr(0, n - 1) + "..." : string;
  return (
    <header
      className={styles.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${
          `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}` ||
          "https://i.imgur.com/e1hLQ2m.png"
        })`,
        backgroundPosition: "center ",
        backgroundPositionY: "20%",
      }}
    >
      <div className={styles.banner__fade}>
        <div className={styles.banner__contents}>
          <p>FEATURED FILM FOR TODAY</p>
          <h1 className={styles.banner__title}>
            {movie?.name || movie?.title || "Netflix"}{" "}
          </h1>
          {movie?.first_air_date && (
            <span>({movie?.first_air_date.slice(0, 4)})</span>
          )}

          <h1 className={styles.banner__description}>
            {truncate(movie?.overview || "Home of all the excitement", 150)}
          </h1>
          <p>
            <StarRatings
              rating={movie?.vote_average}
              starDimension="28px"
              starSpacing="4px"
              numberOfStars={10}
              starRatedColor="#f0c14b"
            />
            <span>{movie?.vote_average}</span>
            <span>({movie?.vote_count})</span>
          </p>
        </div>
      </div>
      <div className={styles.banner__bottom}></div>
    </header>
  );
};

export default Banner;
