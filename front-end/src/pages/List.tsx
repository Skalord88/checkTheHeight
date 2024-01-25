import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { PersonaProns, ListaPersone } from "../components/Type";
import { FooterHigh, ListOfPersone, TopHigh } from "../components/Components.tsx";

export function List() {
  const [personaList, setPersonaList] = useState<PersonaProns[]>([]);
  const [personeList, setPersoneList] = useState<ListaPersone>();

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

  useEffect(() => {
    const personeInList: ListaPersone = { person: personaList };
    setPersoneList(personeInList);
  }, [personaList]);

  return (
    <>
    <div className="container">
      <TopHigh />
    <div>
      {personeList ? (
        <>
          <ListOfPersone person={personeList.person} />
        </>
      ) : (
        <>
          <>...loading persone...</>
        </>
      )}
    </div>
    <FooterHigh />
    </div>
  </>
  );
}
