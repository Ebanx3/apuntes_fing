import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

import "./TemaPage.css";

export const TemaPage = () => {
  const [contenido, setContenido] = useState("");
  const { tema } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const context = import.meta.glob("../../temas/*.md");
        const articleFunc = context[`../../temas/${tema}.md`];
        if (articleFunc) {
          const module = (await articleFunc()) as { default: string };
          setContenido(module.default);
        } else {
          setContenido("Artículo no encontrado");
        }
      } catch {
        setContenido("Error al cargar el artículo");
      }
    })();
  }, [tema]);

  return (
    <>
      <title>{tema}</title>
      <div className="dark:text-zinc-300 text-zinc-800  p-4 my-6">
        <ReactMarkdown
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
        >
          {contenido}
        </ReactMarkdown>
      </div>
    </>
  );
};
