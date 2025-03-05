/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import "katex/dist/katex.min.css";

import "./TemaPage.css";
import { readMdFile } from "../../readMDfile";
import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LinearScale, PointElement, Title, Tooltip, Legend);

const Chart = ({ chartConfig }: any) => {
  const { type, data, options } = chartConfig;

  // Ajustar opciones para colorear solo los ejes
  if (options && options.scales) {
    options.scales.x.grid.color = function (context: { tick: { value: number; }; }) {
      if (context.tick.value === 0) {
        return "gray";
      } else {
        return "transparent";
      }
    };
    options.scales.y.grid.color = function (context: { tick: { value: number; }; }) {
      if (context.tick.value === 0) {
        return "gray";
      } else {
        return "transparent";
      }
    };
    options.scales.x.grid.drawBorder = false;
    options.scales.y.grid.drawBorder = false;
  }

  switch (type) {
    case "scatter":
      return <Scatter data={data} options={options} />;
    default:
      return null;
  }
};

export const TemaPage = () => {
  const [contenido, setContenido] = useState("");
  const { tema } = useParams();

  useEffect(() => {
    readMdFile(tema!).then((res: string) => setContenido(res));
  }, [tema]);

  return (
    <>
      <title>{tema}</title>
      <div className="dark:text-zinc-300   p-4 my-6">
        <ReactMarkdown
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex, rehypeRaw]}
          components={{
            code: ({ node, inline, className, children, ...props }:any) => {
              const match = /chart/.exec(className || "");
              if (!inline && match) {
                const chartConfig = JSON.parse(children);
                return <Chart chartConfig={chartConfig} />;
              }
              return (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {contenido}
        </ReactMarkdown>
      </div>
    </>
  );
};
