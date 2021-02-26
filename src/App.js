import React, { useEffect } from "react";
import "./App.css";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import { auth } from "./Firebase/Firebase";
import { useStateValue } from "./StateProvider/StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is =>", authUser);

      if (authUser) {
        // userLogged in / or the user was logged in.
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    // will only run once when the app component loads...
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            {/* <Login /> */}
            <Login />
          </Route>
          <Route path="/checkout">
            <Navbar />

            <Checkout />
          </Route>
          <Route path="/">
            <Navbar />

            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
