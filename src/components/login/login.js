import React, { useState } from "react";
import "./login.scss";

import { Link } from "react-router-dom";

const Login = ({ name }) => {
  const [valueName, setValueName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (valueName < 3) alert("Ingrese un nombre valido");
    name(valueName);
    setValueName("");
  };
  return (
    <form className="login" onSubmit={handleSubmit}>
      <Link to="/intro"><input className="btnSave" type="submit" value="Save" /></Link>
      <input 
        className="input" 
        type="text" 
        placeholder="Name"
        onChange={e => setValueName(e.target.value)}
        value={valueName}
         />
    </form>
  );
};

export default Login;
