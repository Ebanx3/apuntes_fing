import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { TemaPage } from "./components/TemaPage";
import { Layout } from "./components/Layout";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/:tema" element={<TemaPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
