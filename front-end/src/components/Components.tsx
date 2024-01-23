import React, { useEffect, useState } from "react";
import { InputPersonaProps, ListaPersone, ListaPersoneNew } from "./Type";
import { AddPersonaToCheck } from "./Button.tsx";
import '../style/Style.css';

export const ListOfPersone: React.FC<ListaPersone> = ({ person }) => {
  return (
    <div className="fluo-container">
      {person.map((p, index) => (
        <div key={index} className="fluo-component">
          name: <b>{p.name}</b>, height: <b>{p.high}</b>
        </div>
      ))}
    </div>
  );
};

export const CheckListOfPersone: React.FC<ListaPersoneNew> = ({ person, onChange }) => {

  const [selectPerson, setSelectPerson] = useState<number>(0);

  const addPersonaToList = (e: number) => {

    setSelectPerson(e)

  }

  useEffect(()=>{

    onChange(selectPerson)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectPerson])

  return (
    <div className="fluo-container">
      {person.map((p, index) => (
        <div key={index} className="fluo-component">
          name: <b>{p.name}</b>, height: <b>{p.high}</b> <AddPersonaToCheck id={p.id} selectPersona={addPersonaToList} />
        </div>
      ))}
    </div>
  );
};

export const InputPersona: React.FC<InputPersonaProps> = ({
  initialName,
  initialHigh,
  onChange,
}) => {
  const [name, setName] = useState(initialName);
  const [high, setHigh] = useState(initialHigh);

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangeHigh = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHigh(event.target.valueAsNumber);
  };

  const handleSave = () => {
    onChange(name, high);
  };

  return (
    <>
      <div>
        <input type="text" value={name} onChange={handleChangeName} />
      </div>
      <div>
        <input type="number" value={high} onChange={handleChangeHigh} />
      </div>
      <button onClick={handleSave}>Confirm</button>
    </>
  );
};
