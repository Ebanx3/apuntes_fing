import { labels } from "../../Labels";
import { BotonFiltro } from "./BotonFiltro";
import { BotonNoFiltro } from "./BotonNoFiltro";

interface Props {
    setLabelFilter: (s:string)=>void
}

export const ContenedorFiltros = ({setLabelFilter}:Props) => {

  return (
    <div className="flex gap-2 flex-wrap my-6">
      <BotonNoFiltro onClickMethod={()=>setLabelFilter("")}/>
      {Object.values(labels).map((label) => (
        <BotonFiltro key={label} label={label} onClickMethod={setLabelFilter} />
      ))}
    </div>
  );
};
