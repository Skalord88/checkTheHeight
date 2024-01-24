import React, { useState } from "react";
import { InputPersona, LogoHigh, MenuHigh } from "../components/Components.tsx";
import axios from "axios";
import { personaEmpty } from "../components/Type.ts";
import { ToIndex } from "../components/Button.tsx";
import "../style/Style.css";

export function Create() {
  const [persona, setPersona] = useState(personaEmpty);

  const handleChange = (newName: string, newHigh: number) => {
    setPersona({ ...persona, name: newName, high: newHigh });
  };

  const handleNew = (e: any) => {
    e.preventDefault();
    if (persona.name !== "" || persona.high > 0) {
      axios.post("http://localhost:8080/persone", persona).then((res) => {
        console.log(res);
      });
      setPersona(personaEmpty);
    }
  };

  return (
    <>
      <div className="container">
        <div className="logo">
          <LogoHigh />
        </div>
        <div className="menu">
          <MenuHigh />
        </div>

        <div className={"content"}>
          <h1>
            Persona: {persona.name} High: {persona.high}
          </h1>
        </div>
        <div className={"content"}>
          <InputPersona
            initialName={persona.name}
            initialHigh={persona.high}
            onChange={handleChange}
          />
        
        <button onClick={handleNew}>addPerson</button>
        </div>
        <div className={"footer"}>
          <ToIndex />
        </div>
      </div>
    </>
  );
}
