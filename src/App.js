import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./HomeScreen/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login/Login";
import Header from "./Header/Header";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { getUser, login, logout } from "./features/userSlice";
import Profile from "./Profile/Profile";
function App() {
  const user = useSelector(getUser);

  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="app">
      <Router>
        <Header />
        {!user ? (
          <Route to="/login">
            <Login />
          </Route>
        ) : (
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
