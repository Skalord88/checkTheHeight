export type ListaPersone = {
    person: PersonaProns[]
}

export type ListaPersoneNew = {
    person: PersonaProns[],
    onChange: (newId: number) => void;
}

export type PersonaProns = {
    id: number;
    name: string;
    high: number;
}

export const personaEmpty = {
    name: "",
    high: 0
}

export type InputPersonaProps = {
    initialName: string;
    initialHigh: number;
    onChange: (newName: string, newHigh: number) => void;
}

export type InputPersonaCheck = {
    id: number;
    selectPersona: (newId: number) => void;
}