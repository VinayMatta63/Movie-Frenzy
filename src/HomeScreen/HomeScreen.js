import React from "react";
import Banner from "../Banner/Banner";
import requests from "../Request";
import Row from "../Row/Row";
import styles from "./HomeScreen.module.css";

const HomeScreen = () => {
  return (
    <div className={styles.HomeScreen}>
      <Banner />

      <Row title="Trending Now" fetch_url={requests.fetchTrending} isLargeRow />
      <Row title="Action Movies" fetch_url={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetch_url={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetch_url={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetch_url={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetch_url={requests.fetchDocumentaries} />
      <Row title="Thriller Movies" fetch_url={requests.fetchThriller} />
      <Row title="Unique Movies" fetch_url={requests.fetchOthers} />
      <Row title="Other Hits" fetch_url={requests.fetchRest} />

      <div className={styles.src}>Source:-</div>
      <img
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
        alt="tmdb"
        className={styles.tmdb}
      ></img>
    </div>
  );
};

export default HomeScreen;
