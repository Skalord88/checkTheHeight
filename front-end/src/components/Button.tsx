import React from "react";
import { InputPersonaCheck } from "./Type";
import "../style/Style.css";

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


