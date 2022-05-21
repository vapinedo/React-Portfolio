import { HomeRouter } from "@feature/home/HomeRouter";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<HomeRouter />} />
        <Route path="home" element={<HomeRouter />} />
      </Routes>
    </BrowserRouter>
  )
}