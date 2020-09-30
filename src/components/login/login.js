import React, { useState } from "react";
import "./login.scss";

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
      <input 
        className="input" 
        type="text" 
        placeholder="Name"
        onChange={e => setValueName(e.target.value)}
        value={valueName}
         />
      <input className="btnSave" type="submit" value="Save" />
    </form>
  );
};

export default Login;
