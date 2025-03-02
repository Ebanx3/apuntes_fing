import { Link } from "react-router-dom";
import { Tema as TemaType } from "../../temas";

interface Props {
  tema: TemaType;
}

export const Tema = ({ tema }: Props) => {
  return (
    <Link to={`/${tema.fileName}`}>
      <article className="border p-4 border-zinc-500">
        <h2 className="dark:text-stone-200 font-medium">{tema.title}</h2>
      </article>
    </Link>
  );
};
