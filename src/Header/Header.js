import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Header.module.css";
import WordArt from "react-wordart";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

const Header = () => {
  const [show, setShow] = useState(false);
  const history = useHistory();
  const headerTransition = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", headerTransition);
    return () => {
      window.removeEventListener("scroll", headerTransition);
    };
  }, []);
  return (
    <div className={`${styles.header} ${show && styles.header__black}`}>
      <div className={styles.header__contents}>
        <span className={styles.header__logo} onClick={() => history.push("/")}>
          <WordArt text="Movie Frenzy" theme={`radial`} fontSize={30} />
        </span>
        <span
          className={styles.header__profile}
          onClick={() => history.push("/profile")}
        >
          <AccountBoxIcon />
        </span>
      </div>
    </div>
  );
};

export default Header;
