import React, { useState } from "react";
import {
  FooterHigh,
  InputPersona,
  TopHigh,
} from "../components/Components.tsx";
import axios from "axios";
import { personaEmpty } from "../components/Type.ts";
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
        <TopHigh />
        <div className={"content"}>
        </div>
        <div className={"content"}>
          <InputPersona
            initialName={persona.name}
            initialHigh={persona.high}
            onChange={handleChange}
          />
          
        </div>
        <div className="content">
        <h1>
            Persona: {persona.name} High: {persona.high}{" "}
            <button className="buttonHigh" onClick={handleNew}>
              Add
            </button>
          </h1>
          </div>
        <FooterHigh />
      </div>
    </>
  );
}
