import React from "react";
import { getUser } from "../features/userSlice";
import styles from "./Profile.module.css";
import { useSelector } from "react-redux";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
const Profile = () => {
  const history = useHistory();
  const user = useSelector(getUser);
  return (
    <div className={styles.profile}>
      <div className={styles.profile__body}>
        <h1>Profile</h1>
        <div className={styles.profile__info}>
          <img
            alt=""
            src="https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg"
          ></img>
          <div className={styles.profile__details}>
            <h2>{user.email}</h2>
            <div className={styles.profile__plans}>
              <h3>Details</h3>

              <button
                className={styles.profile__signOut}
                onClick={() => {
                  auth.signOut();
                  history.replace("/");
                }}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
