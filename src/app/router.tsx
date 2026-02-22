import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "@/pages/home";
import Profile from "@/pages/profile";
import Answers from "@/pages/profile/answers";
import Questions from "@/pages/profile/questions";
import Ranking from "@/pages/ranking";
import QnA from "@/pages/qna";
import Layout from "@/layout/Layout";
import Auth from "@/layout/Auth";
import Signup from "@/pages/signup";
import Login from "@/pages/login";
import ProtectedRoute from "@/components/ProtectedRoute";
import Detail from "@/pages/detail";
import Editor from "@/pages/editor";
import ChangePassword from '@/pages/changePassword';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/qna" element={<Navigate replace to="all" />} />
          <Route path="/qna/:category" element={<QnA />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/editor" element={<Editor />} />
            <Route path="/editor/:id" element={<Editor />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/answers" element={<Answers />} />
            <Route path="/profile/questions" element={<Questions />} />
          </Route>
          <Route path="/ranking" element={<Ranking />} />
        </Route>
        <Route element={<Auth />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pwchange" element={<ChangePassword/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
