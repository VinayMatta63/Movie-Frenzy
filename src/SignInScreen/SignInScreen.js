import React, { useRef, useState } from "react";
import styles from "./SignInScreen.module.css";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

const SignInScreen = () => {
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const history = useHistory();

  const [connecting, setConnecting] = useState(false);
  let props = {};
  if (!connecting) {
    props = { display: "none" };
  }
  const register = (e) => {
    setConnecting(true);
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passRef.current.value
      )
      .then(() => {
        setConnecting(false);
      })
      .catch((error) => {
        setConnecting(false);
        alert(error.message);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    setConnecting(true);
    auth
      .signInWithEmailAndPassword(emailRef.current.value, passRef.current.value)
      .then(() => {
        setConnecting(false);
        history.replace("/");
      })
      .catch((error) => {
        setConnecting(false);
        alert(error.message);
      });
  };
  return (
    <div className={styles.signIn}>
      <div className={styles.loader} style={props}>
        <img
          className={styles.loaderGif}
          src="https://www.wpfaster.org/wp-content/uploads/2013/06/loading-gif.gif"
          alt=""
        />
      </div>
      <form>
        <h1>Sign In or Sign Up</h1>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Password" type="password" ref={passRef} />
        <button onClick={signIn}>Sign In</button>
        <h4>
          <span className={styles.gray}>New to Movie Frenzy?</span>
          <span className={styles.link} onClick={register}>
            Sign Up now
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignInScreen;
