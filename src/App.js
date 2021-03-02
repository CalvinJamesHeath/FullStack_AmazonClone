import React, { useEffect } from "react";
import "./App.css";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import { auth } from "./Firebase/Firebase";
import { useStateValue } from "./StateProvider/StateProvider";
import Payment from "./components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders/Orders";

const promise = loadStripe(
  "pk_test_51IPaoDDlp973cFVTjaILiwOViCWACphVZGskINoemOURgfHGmY4w2NLzBHGdrlQwZfd4NPJhdggSDHxG3FQTJCEc00XDFPnseZ"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("user is =>", authUser);

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
            <Login />
          </Route>
          <Route path="/orders">
            <Navbar />
            <Orders />
          </Route>
          <Route path="/checkout">
            <Navbar />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Navbar />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
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
