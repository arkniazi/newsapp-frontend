import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../pages/Home";
import { Login } from "../pages/auth/Login";
import Register from "../pages/auth/Register";
// import Home from "../pages/home/Home";
// import { Login } from "../pages/auth/Login";

const PrivateRoutes = () => {
  const isAuthorized = useSelector(({ auth }) => auth.isAuthenticated);

  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      {/* <Route
        path="/profile"
        element={
          isAuthorized ? (
            <UserProfile />
          ) : (
            <Navigate to="/login" replace={true} />
          )
        }
      />
      <Route
        path="/preferences"
        element={
          isAuthorized ? (
            <UserPreferences />
          ) : (
            <Navigate to="/login" replace={true} />
          )
        }
      />
      <Route
        path="/news/:newsId"
        element={
          isAuthorized ? (
            <NewsDetail />
          ) : (
            <Navigate to="/login" replace={true} />
          )
        }
      /> */}
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/register"
        element={
          isAuthorized ? <Navigate to="/" replace={true} /> : <Register />
        }
      />
    </Routes>
  );
};

export default PrivateRoutes;
