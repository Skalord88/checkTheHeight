import { useEffect, useState } from "react";
import { ListaPersone, PersonaProns } from "../components/Type.tsx";
import axios from "axios";
import React from "react";
import { ListOfPersone } from "../components/Components.tsx";
import { ToIndex } from "../components/Button.tsx";

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
          {personeList ? (
            <>
            <ListOfPersone person={personeList.person} />
            <div>
            <ToIndex />
          </div>
          </>
          ) : (
            <>...loading persone...</>
          )}
        </div>
      </>
    );
  }