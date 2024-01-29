import axios from "axios";
import { useEffect, useState } from "react";
import { PersonaProns } from "../components/Type.tsx";
import React from "react";
import {
  CheckListOfPersone,
  FooterHigh,
  ListOfPersone,
  TopHigh,
} from "../components/Components.tsx";

export function Highest() {
  const [personaList, setPersonaList] = useState<PersonaProns[]>([]);
  const [personaNewList, setPersonaNewList] = useState<PersonaProns[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resURL = await axios.get("http://localhost:8080/persone");

        setPersonaList(resURL.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const addPersonToList = (newId: any) => {
    const id: number = parseInt(newId);

    const selectedPersona = personaList.find((persona) => persona.id === id);
    if (selectedPersona) {
      setPersonaNewList((list) => [...list, selectedPersona]);
    }
  };

  const handleCheck = () => {
    const sortList = Array.from(personaNewList).sort((p1, p2) => p2.high - p1.high);
    console.log(sortList);
    setPersonaNewList(sortList);
  };

  return (
    <>
      <div className="container">
        <TopHigh />
        <div>
          <CheckListOfPersone person={personaList} onChange={addPersonToList} />
        </div>

        <div>
          {personaNewList.length === 0 ? (
            <>select person to check</>
          ) : (
            <>
              <div>
                <ListOfPersone person={personaNewList} />
                <button className="buttonHigh" onClick={handleCheck}>
                  order
                </button>
              </div>
            </>
          )}
        </div>
        <FooterHigh />
      </div>
    </>
  );
}
