import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import Home from "@/pages/home";
import Profile from "@/pages/profile";
import Ranking from "@/pages/ranking";
import QnA from "@/pages/qna";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to='home' />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'qna',
        element: <QnA />
      },
      {
        path: 'ranking',
        element: <Ranking />
      },
      {
        path: 'profile',
        element: <Profile />
      },
    ]
  },
])

export default router;