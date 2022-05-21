import { Route, Routes } from "react-router-dom";
import { HomePage } from "@feature/home/pages/HomePage";

export const HomeRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<HomePage />} />
      </Routes>
    </div>
  )
}