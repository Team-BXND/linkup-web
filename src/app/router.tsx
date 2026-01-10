import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/home";
import Profile from "@/pages/profile";
import Ranking from "@/pages/ranking";
import QnA from "@/pages/qna";
import Layout from "@/layout/Layout";
import Auth from "@/layout/Auth";
import Signup from "@/pages/signup";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/qna" element={<QnA />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route element={<Auth />}>
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;