import { useEffect, useState } from "react";
import { ContenedorFiltros } from "./ContenedorFiltros";
import { ContenedorTemas } from "./ContenedorTemas";

export const HomePage = () => {
  const [labelFilter, setLabelFilter] = useState("");

  useEffect(() => {}, [labelFilter]);

  return (
    <>
      <title>Apuntes</title>

      <h1 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100">
        Apuntes de Ingeniería
      </h1>
    
      <ContenedorFiltros setLabelFilter={setLabelFilter} />
      <ContenedorTemas label={labelFilter} />
    </>
  );
};
