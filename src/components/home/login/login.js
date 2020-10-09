import React, { useState } from "react";
import "./login.scss";

import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [valueName, setValueName] = useState("");
  const [valueError, setValueError] = useState(false);
  const handleSubmit = (e) => {
    const pattern = new RegExp('^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$', 'i');
    e.preventDefault();
    console.log(valueName);
    if (valueName.length < 3) {
      setValueError("El nombre solo debe contener letras y debe ser mínimo de 3 caracteres");
    } else if (!pattern.test(valueName)) {
      setValueError("El nombre solo debe contener letras y debe ser mínimo de 3 caracteres");
    } else {
      history.push(`/intro/${valueName}`);
    }
  };
  return (
    <div>
    <form className="login__form" onSubmit={handleSubmit} onChange={() => setValueError('')}>
      <input
        className="login__input"
        type="text"
        placeholder="Name"
        onChange={(e) => setValueName(e.target.value)}
        value={valueName}
      />
      <input className="login__btn" type="submit" value="Save" />
    </form>
    <p className="login__p">{valueError}</p>
    </div>
  );
};

export default Login;
