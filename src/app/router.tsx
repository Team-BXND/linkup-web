import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "@/pages/home";
import Profile from "@/pages/profile";
import Ranking from "@/pages/ranking";
import QnA from "@/pages/qna";
import Layout from "@/layout/Layout/index";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/qna" element={<QnA />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;