import React from "react";
import { InputPersonaCheck } from "./Type";
import "../style/Style.css";
import { Link } from "react-router-dom";

export const AddPersonaToCheck: React.FC<InputPersonaCheck> = ({
  id,
  selectPersona,
}) => {
  const addPersona = (e: any) => {
    selectPersona(e.target.value);
  };

  return (
    <button className="buttonHigh" value={id} onClick={addPersona}>
      select
    </button>
  );
};

export const ToIndex: React.FC = () => {
  return (
    <button className="buttonHigh">
      <Link to={"/"}>to Index</Link>
    </button>
  );
};
