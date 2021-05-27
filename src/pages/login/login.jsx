import React from "react";

import SignIn from "../../components/sign-in/sign-in";

import "./login.scss";

const Login = () => (
  <div className="login row m-5 p-5">
    <div className="col">
      <SignIn />
    </div>
  </div>
);

export default Login;
