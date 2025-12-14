import React from "react";
import Login from "./pages/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layout/MainLayout.jsx";
import { RouterProvider } from "react-router";
import Courses from "./pages/student/Courses.jsx";
import MyLearnig from "./pages/student/MyLearnig.jsx";
import Profile from "./pages/student/Profile.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <>
        <HeroSection/>
        <Courses/>
        </>,
        
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "my-learning",
        element: <MyLearnig />,
      },
      {
        path: "profile",
        element: <Profile/>,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  );
};

export default App;
