import axios from "../axios";
import React, { useEffect, useState } from "react";
import styles from "./Row.module.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseURL = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetch_url, isLargeRow = false }) => {
  const [trailerUrl, setTrailerUrl] = useState("");
  const [movies, setMovies] = useState([]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const clickHandle = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(
        movie?.name ||
          movie?.title ||
          movie?.original_name ||
          movie?.original_title,
        {
          id: true,
        }
      )
        .then((url) => {
          setTrailerUrl(url);
        })
        .catch((error) => {
          console.warn(error);
        });
    }
  };
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetch_url);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetch_url]);
  const truncate = (string, n) =>
    string?.length > n ? string.substr(0, n - 1) + "..." : string;

  return (
    <div className={styles.row}>
      <h2>{title}</h2>
      <div className={styles.row__images}>
        {movies?.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <div className={styles.frenzy}>
                <img
                  src={`${baseURL}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                  key={movie.id}
                  onClick={() => clickHandle(movie)}
                  className={`${styles.row__image} ${
                    isLargeRow && styles.row__imageLarge
                  }`}
                />
                <span className={styles.frenzy__text}>
                  {truncate(movie.name || movie.title, 25)}
                </span>
              </div>
            )
        )}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
