import React, { useEffect, useState } from "react";
import { InputPersonaProps, ListaPersone, ListaPersoneNew } from "./Type";
import { AddPersonaToCheck } from "./Button.tsx";
import "../style/Style.css";
import { Link } from "react-router-dom";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&display=swap');
</style>;

export const LogoHigh: React.FC = () => {
  return <div className="logo">Height of People</div>;
};

export const MenuHigh: React.FC = () => {
  return (
    <div className="menu">
      <div className="option">
        <Link to={"/create"}>Create</Link>
      </div>
      <div className="option">
        <Link to={"/list"}>List</Link>
      </div>
      <div className="option">
        <Link to={"/sort"}>Sort</Link>
      </div>
      <div className="option">
        <Link to={"/check"}>Highest</Link>
      </div>
      <div></div>
    </div>
  );
};

export const ListOfPersone: React.FC<ListaPersone> = ({ person }) => {
  return (
    <>
      {person.map((p, index) => (
        <div key={index} className="content">
          name: <b>{p.name}</b>, height: <b>{p.high}</b>
        </div>
      ))}
    </>
  );
};

export const CheckListOfPersone: React.FC<ListaPersoneNew> = ({
  person,
  onChange,
}) => {
  const [selectPerson, setSelectPerson] = useState<number>(0);

  const addPersonaToList = (e: number) => {
    setSelectPerson(e);
  };

  useEffect(() => {
    onChange(selectPerson);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectPerson]);

  return (
    <>
      {person.map((p, index) => (
        <div key={index} className="content">
          name: <b>{p.name}</b>, height: <b>{p.high}</b>{" "}
          <AddPersonaToCheck id={p.id} selectPersona={addPersonaToList} />
        </div>
      ))}
    </>
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
