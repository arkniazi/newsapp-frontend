import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../pages/Home";
import { Login } from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import UserPreferences from '../pages/user/Preference';
import UserProfile from '../pages/user/Profile';
import ArticleDetail from "../pages/article/ArticleDetail";
const AppRoutes = () => {
  const isAuthorized = useSelector(({ auth }) => auth.isAuthenticated);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
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
        path="/articles/:articleId"
        element={<ArticleDetail />}
      />
      <Route path="/login" element={isAuthorized ? <Navigate to="/" replace={true} /> :<Login />} />
      <Route path="/register" element={isAuthorized ? <Navigate to="/" replace={true} /> : <Register />} />
    </Routes>
  );
};

export default AppRoutes;
