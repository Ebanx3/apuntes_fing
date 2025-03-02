import { Outlet } from "react-router-dom";
import { BotonClaroOscuro } from "./BotonClaroOscuro";

export const Layout = () => {
  return (
    <div className="w-screen dark:bg-zinc-900">
      <main className="min-h-screen max-w-[1024px] m-auto p-4 relative">
        <BotonClaroOscuro />
        <Outlet />
      </main>
    </div>
  );
};
