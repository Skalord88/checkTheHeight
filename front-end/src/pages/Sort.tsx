import { useEffect, useState } from "react";
import { ListaPersone, PersonaProns } from "../components/Type.tsx";
import axios from "axios";
import React from "react";
import {
  FooterHigh,
  ListOfPersone,
  TopHigh,
} from "../components/Components.tsx";

export function Sort() {
  const [personaList, setPersonaList] = useState<PersonaProns[]>([]);
  const [personeList, setPersoneList] = useState<ListaPersone>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resURL = await axios.get("http://localhost:8080/persone/sort");

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

        {personeList ? (
          <>
            <div content="content">
              <ListOfPersone person={personeList.person} />
            </div>
          </>
        ) : (
          <>...loading persone...</>
        )}
        <FooterHigh />
      </div>
    </>
  );
}
