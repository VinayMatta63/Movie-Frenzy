import React, { useState } from "react";
import SignInScreen from "../SignInScreen/SignInScreen";
import styles from "./Login.module.css";
const Login = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className={styles.login}>
      <div className={styles.login__background}>
        <button
          className={styles.login__button}
          onClick={() => setSignIn(!signIn)}
        >
          {!signIn ? "Sign in" : "Home"}
        </button>
        <div className={styles.login__gradient} />
      </div>
      <div className={styles.login__body}>
        {signIn ? (
          <SignInScreen />
        ) : (
          <>
            <h1>Feeling bored? Wanna Watch a Movie?</h1>
            <h2>We are here to help!</h2>
            <h3>
              Check out latest movie trailers and decide what you watch next
            </h3>
            <div className={styles.login__input}>
              <button
                className={styles.login__startButton}
                onClick={() => setSignIn(true)}
              >
                GET STARTED
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
