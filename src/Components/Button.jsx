import React from "react";

const Button = ({ name, callback }) => {
  return (
    <div>
      <button onClick={callback}>{name}</button>
    </div>
  );
};

export default Button;
