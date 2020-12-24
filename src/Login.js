import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";
import { auth, provider } from "./firebase";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__text">
          <h1>ML-Messages</h1>
        </div>

        <Button onClick={signIn}>
          <MailOutlineIcon className="mailIconLogin" />
          Google Sign-In
        </Button>
      </div>
    </div>
  );
}

export default Login;
