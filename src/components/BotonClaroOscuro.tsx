import { useEffect, useState } from "react";
import { IconoSol } from "./IconoSol";
import { IconoLuna } from "./IconoLuna";

export const BotonClaroOscuro = () => {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return <button onClick={()=> setDarkMode(value => !value)}className="cursor-pointer fixed top-6 right-6">{darkMode? <IconoSol/> :<IconoLuna /> }</button>;
};
