import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

enum AuthMode {
  Login,
  Register
}

const Auth = () => {
  const [auth, setAuth] = useState();
  const [mode, setMode] = useState<AuthMode>(AuthMode.Login);

  return <p>asd</p>;

  //return mode === AuthMode.Login ? <Login /> : <Register />;
};

export default Auth;
