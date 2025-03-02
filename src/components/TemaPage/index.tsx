import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

import "./TemaPage.css";
import { readMdFile } from "../../readMDfile";

export const TemaPage = () => {
  const [contenido, setContenido] = useState("");
  const { tema } = useParams();

  useEffect(() => {
    readMdFile(tema!).then((res: string) => setContenido(res));
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
