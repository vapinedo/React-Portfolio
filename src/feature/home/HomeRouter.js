import { Route, Routes } from "react-router-dom";
import { HomePage } from "@feature/home/pages/HomePage";

export const HomeRouter = () => {
  return (
    <Routes>
      <Route path="" element={<HomePage />} />
    </Routes>
  );
};
