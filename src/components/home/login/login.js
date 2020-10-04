import React, { useState } from "react";
import "./login.scss";

import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [valueName, setValueName] = useState("");
  const handleSubmit = (e) => {
    const pattern = new RegExp("^[A-Z]+$", "i");
    e.preventDefault();
    if (valueName < 3) {
      alert("El nombre debe contener mínimo 3 caracteres");
    } else if (!pattern.test(valueName)) {
      alert("El nombre solo debe contener letras");
    } else {
      console.log(valueName);
      history.push(`/intro/${valueName}`);
    }
  };
  return (
    <form className="login" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Name"
        onChange={(e) => setValueName(e.target.value)}
        value={valueName}
      />
      <input className="btnSave" type="submit" value="Save" />
    </form>
  );
};

export default Login;
