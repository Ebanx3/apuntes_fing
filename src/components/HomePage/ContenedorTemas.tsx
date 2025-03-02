import { useEffect, useState } from "react";
import { Tema as TemaType, temas } from "../../../temas";
import { Tema } from "./Tema";

interface Props {
  label: string;
}

export const ContenedorTemas = ({ label }: Props) => {

  const [temasVisibles, setTemasVisibles] = useState<TemaType[]>(temas);

  useEffect(()=>{
    if(label !== "") setTemasVisibles(temas.filter((tema:TemaType)=> tema.tags.includes(label)))
    else setTemasVisibles(temas)
  },[label]);

  return (
    <div className="flex flex-col gap-4">
      {temasVisibles.map((tema) => (
        <Tema tema={tema} key={tema.title}/>
      ))}
    </div>
  );
};
