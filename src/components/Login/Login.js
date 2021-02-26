import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../Firebase/Firebase";
import "./Login.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();

    // fancy firebase login
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it succesfully created a new user
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
    // do fancy firebase register
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__singInButton"
            onClick={signIn}
            type="submit"
          >
            Sign in
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE made by (CJH) &nbsp;
          <span>Conditions of Use & Sale.</span> Please see our{" "}
          <span>Privacy Notice</span>, our &nbsp;<span>Cookies Notice</span> and
          our <span>Interest-Based Ads Notice</span>.
        </p>
        <button className="login__registerButton" onClick={register}>
          Create your Amazon acoount!
        </button>
      </div>
    </div>
  );
}

export default Login;
